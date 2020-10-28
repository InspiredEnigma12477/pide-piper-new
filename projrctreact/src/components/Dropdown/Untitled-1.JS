const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__links');
  const nanLinks =document.querySelector('.nav__links li');
  //toggle nav
burger.addEventListener('click',() =>{
nav.classList.toggle('nav-active');
//animate links
navLinks.forEach(link,index) => {
  if (link.style.animation){
    link.style.animation =
  }
  else{
 link.style.animation = 'navLinkFade 0.5s ease forward ${index / 7 + 1}s';

  }

  
});
//burger anima