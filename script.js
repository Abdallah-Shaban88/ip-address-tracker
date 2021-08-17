
window.addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
    
})
    var map = L.map('map', {
    center: [0, -0],
    zoom: 1,
    
});

//var map = L.map('map');

var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    layer.addTo(map)

console.log(map.options.center)

 const searchInput = document.querySelector('input'),
      searchBtn = document.querySelector('.search-erea button'),
      ipInfoList = document.querySelector('.info-list')
      
 let ip
 

searchBtn.addEventListener('click', (e)  =>{
  e.preventDefault();
  ip = searchInput.value
   getData(ip)
  
  
  searchInput.value = ''
} )

let  getData = async (ip) => {
 let response = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_NbhUfB5HwTkC1euPGEJTL3FGhUSoX&domain=${ip}`)
 let data = response.json()
 .then(info => {
   console.log(info);
   ipInfoList.innerHTML =`
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
  // map.options.center = [info.location.lat, info.location.lng]
   L.marker([info.location.lat, info.location.lng]).addTo(map);
   map.setView([info.location.lat, info.location.lng], 17)

 })
}


/*function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}*/
