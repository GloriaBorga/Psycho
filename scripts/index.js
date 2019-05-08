// Navbar
const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
      }
    });

    burger.classList.toggle('toggle');
  });
}
navSlide();

// Accordion

let acc = document.getElementsByClassName("accordion");
console.log(acc);


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