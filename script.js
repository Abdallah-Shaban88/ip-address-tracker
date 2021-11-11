
window.addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
    
})
    var map = L.map('map', {
    center: [0, -0],
    zoom: 1,
    
});

var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    layer.addTo(map)

localStorage.setItem('map', map)

 const searchInput = document.querySelector('input'),
      searchForm = document.querySelector('.search-erea'),
      ipInfoList = document.querySelector('.info-list'),
      loader = document.querySelector('.loader')
      
 let ip
 

searchForm.addEventListener('submit', (e)  =>{
  e.preventDefault();
  ip = searchInput.value //&& searchInput.value !== ''
  if(searchInput.value == ''){
    console.log('empty value');
    return
  }
   loader.style.display = 'block';
   getData(ip)
  searchInput.value = ''
} )

let  getData = async (ip) => {
 let response = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_NbhUfB5HwTkC1euPGEJTL3FGhUSoX&domain=${ip}`)
 let data = response.json()
 .then(info => {
   if(!data){
     console.log("error")
   }else{
   console.log(info);
   loader.style.display = 'none'
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
   L.marker([info.location.lat, info.location.lng]).addTo(map);
   map.setView([info.location.lat, info.location.lng], 17)
 }
 })
}



