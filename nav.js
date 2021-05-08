const navSlide = () => {
  const burger = document.querySelector('.burger');
  const innerCircle = document.querySelector('#innerCircle');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  let counter = 0;

  function timeFunction() {
    counter++
    if (counter == 4) {
      innerCircle.style.animationPlayState = "paused"
    } else if (counter == 8) {
      innerCircle.style.animationPlayState = "running"
    } else if (counter == 12) {
      innerCircle.style.animationPlayState = "paused"
    } else if (counter == 16) {
      innerCircle.style.animationPlayState = "running"
      counter = 0
    }
  }

  let timerInterval = setInterval(timeFunction, 1000);



  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();