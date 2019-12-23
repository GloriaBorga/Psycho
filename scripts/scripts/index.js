// Navbar
const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const hideMenu = document.querySelector('.hide-menu');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    hideMenu.classList.toggle('none');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    });

    burger.classList.toggle('toggle');
  });
  // Navbar Hide
  hideMenu.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    hideMenu.classList.toggle('none');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    });
   }
  )
}
navSlide();
// Accordion
let acc = document.getElementsByClassName("accordion");
for(let i=0;i < acc.length; i++){
  acc[i].onclick = function(){
    this.classList.toggle('is-open');
    let content = this.nextElementSibling;

    if(content.style.maxHeight){
      content.style.maxHeight = null;  //open
    }else{
      content.style.maxHeight = content.scrollHeight + "px";  //closed
    }
  }
}





