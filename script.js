const searchInput = document.querySelector('input'),
      searchBtn = document.querySelector('.search-erea button')

searchBtn.addEventListenee('click', (e) =>{
  e.preventDefult();
  console.log(e.target.value)} )
