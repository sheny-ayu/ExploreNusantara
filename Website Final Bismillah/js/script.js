// toggle class active
const  navbarNav = document.querySelector('.navbar-nav');
// when hamburger click
document.querySelector('#hamburger-menu'). onclick = () => {
    navbarNav.classList.toggle('active');
};

//luar side bar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1
      }
      768: {
        slidesPerView: 2
      }
      1024: {
        slidesPerView: 3
      }
    }
  });
