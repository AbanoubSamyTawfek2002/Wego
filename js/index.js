window.onscroll = function() {scrollFunction()};

function scrollFunction() { {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  
      document.getElementById("navbar").style.backgroundColor = "#FFFFFF";
      document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
      document.getElementById("logo").style.fontSize = "25px";
    } else {

      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.boxShadow = "none";
      document.getElementById("logo").style.fontSize = "35px";
    }
  }
  
}


const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function() {
        
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

const navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    navbar.classList.add('visible'); 
  } else {
    navbar.classList.remove('visible'); 
  }
});


const container = document.querySelector('.cards-container');
const prevButton = document.querySelector('.carousel-btn-prev');
const nextButton = document.querySelector('.carousel-btn-next');

const cardWidth = document.querySelector('.wego-card').offsetWidth + 15; 

nextButton.addEventListener('click', () => {

  container.scrollBy({ left: cardWidth, behavior: 'smooth' });


  if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
    setTimeout(() => {
      container.scrollTo({ left: 0, behavior: 'smooth' }); 
    }, 300); 
  }
});


prevButton.addEventListener('click', () => {
  
  container.scrollBy({ left: -cardWidth, behavior: 'smooth' });


  if (container.scrollLeft === 0) {
    setTimeout(() => {
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' }); // اذهب إلى النهاية
    }, 300); 
  }
});


nextBtn.addEventListener('click', () => {
  const activeSlide = carousel.querySelector('.carousel-item.active');
  const nextSlide = activeSlide.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
  
  activeSlide.classList.remove('active');
  nextSlide.classList.add('active');
});
