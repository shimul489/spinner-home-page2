(function($) { "use strict";
// sticky header

window.addEventListener('scroll',function(){
    const header = document.querySelector('header.style-1, header.style-2, header.style-3,header.style-4');
    header.classList.toggle("sticky",window.scrollY > 0);
  });
  

// mobile-menu

$('.mobile-menu-btn').on("click",function(){
    $('.main-nav').addClass('show-menu');
  });
  
  $('.menu-close-btn').on("click",function(){
    $('.main-nav').removeClass('show-menu');
  });
  
  // mobile-drop-down
  
  $(".main-nav .bi").on('click', function (event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.sub-menu').slideUp();
    $(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
    if ($fl.hasClass('bi-chevron-down')) {
        $fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
    } else {
        $fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
    }
    $fl.next(".sub-menu").slideToggle();
  });

// mobile-search-area

$('.search-btn').on("click", function(){
    $('.mobile-search').addClass('slide');
  });
  
  $('.search-cross-btn').on("click", function(){
    $('.mobile-search').removeClass('slide');
  });
  
// Menu Toggle button sidebar
var toggleIcon = document.querySelectorAll('.sidebar-btn')
var closeIcon = document.querySelectorAll('.cross-icon')
var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')

toggleIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.add('show-sidebar')
        })
    })
})
closeIcon.forEach((element)=>{
    element.addEventListener('click', ()=>{
        document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
            el.classList.remove('show-sidebar')
        })
    })
})

 window.onclick = function(event){
    // Menu Toggle button sidebar
    searchWrap.forEach((el)=>{
      if(event.target === el){
        el.classList.remove('show-sidebar')
      }
    })
}

var swiper= new Swiper(".banner2", {
    slidesPerView: 1,
    speed: 1500,
    loop: true,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    parallax: true,
    effect: 'fade',
    navigation: false,
    fadeEffect: {
      crossFade: true,
    },
  
    autoplay: {
      delay: 9000
    },
    pagination: {
      el: ".banner2-pagination",
      clickable: true,
    }
  });


var swiper = new Swiper(".sponsor-slider", {
    slidesPerView: 7,
    speed: 1500,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.sponsor-prev1',
        prevEl: '.sponsor-next1',
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            navigation: false,
        },
        480: {
            slidesPerView: 2,
            navigation: false,
        },
        768: {
            slidesPerView: 3,
            navigation: false,
            
        },
        992: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        },
        1300: {
            slidesPerView: 6
        },
        1400: {
            slidesPerView: 7
        },
    }

});

// var swiper = new Swiper(".portfolio-slider1", {
//     slidesPerView: 3,
//     speed: 1200,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 4000,
//     },
//     pagination: {
//         el: ".swiper-pagination1",
//         clickable: 'true',
//     },
//     navigation: {
//         nextEl: '.portfolio-prev1',
//         prevEl: '.portfolio-next1',
//     },
//     breakpoints: {
//         280: {
//             slidesPerView: 1,
//             navigation: false,
//         },
//         480: {
//             slidesPerView: 1,
//             navigation: false,
//         },
//         768: {
//             slidesPerView: 2,
//             navigation: false,
//         },
//         992: {
//             slidesPerView: 2
//         },
//         1200: {
//             slidesPerView: 3
//         },
//     }
// });

// var swiper = new Swiper(".service-slider", {
//     slidesPerView: 3,
//     speed: 1200,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 4000,
//     },
//     navigation: {
//         nextEl: '.service-button-next',
//         prevEl: '.service-button-prev',
//     },
//     breakpoints: {
//         280: {
//             slidesPerView: 1,
//             navigation: false,
//         },
//         480: {
//             slidesPerView: 1,
//             navigation: false,
//         },
//         768: {
//             slidesPerView: 2,
//             navigation: false,
//         },
//         992: {
//             slidesPerView: 2
//         },
//         1200: {
//             slidesPerView: 3
//         },
//     }
// });

// var swiper = new Swiper(".portfolio-slider", {
//     slidesPerView: 3,
//     speed: 1200,
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 4000,
//     },
    
   
//     pagination: {
//         el: ".swiper-pagination",
//         dynamicBullets: true,
//       },
//     breakpoints: {
//         280: {
//             slidesPerView: 1,
//             navigation: false,
//         },
//         480: {
//             slidesPerView: 1,
//             navigation: false,
//         },
//         768: {
//             slidesPerView: 2,
//             navigation: false,
//         },
//         992: {
//             slidesPerView: 2
//         },
//         1200: {
//             slidesPerView: 3
//         },
//     }
//   });
var swiper = new Swiper(".service-slider", {
    slidesPerView: 3,
    speed: 1200,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            navigation: false,
        },
        480: {
            slidesPerView: 1,
            navigation: false,
        },
        768: {
            slidesPerView: 2,
            navigation: false,
            
        },
        992: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
    }
  });


var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    speed: 1200,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '.testi-button-next',
        prevEl: '.testi-button-prev',
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            navigation: false,
        },
        480: {
            slidesPerView: 1,
            navigation: false,
        },
        768: {
            slidesPerView: 2,
            navigation: false,
            
        },
        992: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 2
        },
        1400: {
            slidesPerView: 2
        },
    }
  });


  var swiper = new Swiper(".portfolio-slider1", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 4000,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      280: {
          slidesPerView: 1,
          navigation: false,
      },
      480: {
          slidesPerView: 1,
          navigation: false,
      },
      768: {
          slidesPerView: 3,
          navigation: false,
         
      },
      992: {
          slidesPerView: 4
      },
      1200: {
          slidesPerView: 4
      },
  }
  });
  // Magnific Popup video


}(jQuery));