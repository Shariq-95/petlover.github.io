burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')



burger.addEventListener('click', ()=>{
     navbar.classList.toggle('h-nav')
     rightNav.classList.toggle('v-class')
     navList.classList.toggle('v-class')
})

function first() {
     document.getElementById("home") .className= "background2 firstSection" ;
}
function second() {
     document.getElementById("home") .className= "background firstSection" ;
}

setInterval (first,3000);
setInterval (second,6000);