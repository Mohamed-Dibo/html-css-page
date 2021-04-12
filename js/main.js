let header= document.querySelector('.header'),
    navbtn= document.querySelector('.links i'),
    features = document.querySelector('.features')
    services = document.querySelector('.services')
    search = document.querySelector('.search')
    btnSearch = document.querySelector('.search label i')

 navbtn.addEventListener('click',()=> header.classList.toggle('active'))  
 window.addEventListener('scroll',()=>{

    if (scrollY >= 300 ) {
        header.classList.remove('active')
    }
     
     if (scrollY >= 200 && scrollY < 700) {
        features.classList.add('active')
     }
     else if (scrollY < 200 || scrollY >= 1100){
        features.classList.remove('active')
     }
 }
 ) 
 window.addEventListener('scroll',()=>{
    console.log(scrollY);
     if (scrollY >= 796 && scrollY <= 1736) {
        services.classList.add('active')
     }
     else if (scrollY <= 970 || scrollY >= 2000){
        services.classList.remove('active')
     }
 }
 ) 
btnSearch.addEventListener('click' , ()=>{
   search.classList.toggle('active')
  if (search.classList.contains('active')) {
      search.firstElementChild.focus();
  }
})
