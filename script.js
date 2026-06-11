// 1. Handle viewport height adjustments on mobile load
window.addEventListener("load", function () {
  var viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    viewport.content + ", height=" + window.innerHeight,
  );
});

// 2. Initialize the Leaflet Map and set initial coordinates
var map = L.map("map", {
  center: [0, -0],
  zoom: 1,
});

// Add OpenStreetMap tiles layer to the map
var layer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
layer.addTo(map);

// Cache the map instance to local storage (Optional reference)
localStorage.setItem("map", map);

// 3. DOM Elements Selection
const searchInput = document.querySelector("input"),
  searchForm = document.querySelector(".search-erea"),
  ipInfoList = document.querySelector(".info-list"),
  loader = document.querySelector(".loader");

let ip;

// 4. Handle Form Submission & Search Trigger
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  ip = searchInput.value;

  // Validation: Prevent empty search queries
  if (searchInput.value == "") {
    console.log("empty value");
    return;
  }
  // Show loader and fetch IP data
  loader.style.display = "block";
  getData(ip);
  searchInput.value = ""; // Clear input field
});

// 5. Asynchronous function to fetch geolocation data from API
let getData = async (ip) => {
  // 🔒 Security Note: Fetching the API Key securely using Vite's environment variables (import.meta.env)
  // This prevents the private API key from being exposed on GitHub.
  let response = await fetch(`${import.meta.env.VITE_apiKey}${ip}`);
  let data = response.json().then((info) => {
    if (!data) {
      console.log("error");
    } else {
      console.log(info);
      loader.style.display = "none"; // Hide loader once data is retrieved

      // Update UI with the retrieved IP tracking information
      ipInfoList.innerHTML = `
   <li>
    <span>IP Address</span>
    <span>${info.ip}</span>
   </li>
      <li>
    <span>location</span>
    <span>${info.location.region}, ${info.location.city} </span>
   </li>
      <li>
    <span>time zone</span>
    <span>UTC ${info.location.timezone}</span>
   </li>
      <li>
    <span>ISP</span>
    <span>${info.isp}</span>
   </li>
   `;

      // Update map marker and pan view to the new location
      L.marker([info.location.lat, info.location.lng]).addTo(map);
      map.setView([info.location.lat, info.location.lng], 17);
    }
  });
};
