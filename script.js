

 const slides=document.querySelector(".slider").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const indicator=document.querySelector(".indicator");
 let index=0;


   prev.addEventListener("click",function(){
       prevSlide();
       updateCircleIndicator(); 
       resetTimer();
   })

   next.addEventListener("click",function(){
      nextSlide(); 
      updateCircleIndicator();
      resetTimer();
      
   })

   // create circle indicators
    function circleIndicator(){
        for(let i=0; i< slides.length; i++){
        	const div=document.createElement("div");
        	      div.innerHTML=i+1;
                div.setAttribute("onclick","indicateSlide(this)")
                div.id=i;
                if(i==0){
                	div.className="active";
                }
               indicator.appendChild(div);
        }
    }
    circleIndicator();

    function indicateSlide(element){
         index=element.id;
         changeSlide();
         updateCircleIndicator();
         resetTimer();
    }
     
    function updateCircleIndicator(){
    	for(let i=0; i<indicator.children.length; i++){
    		indicator.children[i].classList.remove("active");
    	}
    	indicator.children[index].classList.add("active");
    }

   function prevSlide(){
   	 if(index==0){
   	 	index=slides.length-1;
   	 }
   	 else{
   	 	index--;
   	 }
   	 changeSlide();
   }

   function nextSlide(){
      if(index==slides.length-1){
      	index=0;
      }
      else{
      	index++;
      }
      changeSlide();
   }

   function changeSlide(){
   	       for(let i=0; i<slides.length; i++){
   	       	 slides[i].classList.remove("active");
   	       }

       slides[index].classList.add("active");
   }

   function resetTimer(){
   	  // when click to indicator or controls button 
   	  // stop timer 
   	  clearInterval(timer);
   	  // then started again timer
   	  timer=setInterval(autoPlay,4000);
   }
 
  
  function autoPlay(){
      nextSlide();
      updateCircleIndicator();
  }

  let timer=setInterval(autoPlay,4000);


  $(document).ready(function(){

    $(window).on('scroll load',function(){
        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if(window.scrollY>200){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy of section
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
});

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },600, 'linear')
    })
});

// menubar nav
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let imgBtn = document.querySelectorAll('.img-btn');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.addEventListener('scroll', function(){
           const header = document.querySelector('header');
           header.classList.toggle("sticky", window.scrollY > 0); 
});

// change home background
imgBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#home').style.backgroundImage = 'url("'+src+'")';
    });
});

// carousel life in composey
var lifeimg = document.querySelectorAll('.lifeimg')
var len=lifeimg.length;

for(var i=0; i<len; i++){
    lifeimg[i].addEventListener('click' , function() {
        document.getElementById('curimg').src = this.src
    })
}

const slideLeft = document.getElementById('prev');
const slideRight = document.getElementById('next');

slideLeft.addEventListener('click', function(){
  document.getElementById('lifeimg-gallery').scrollLeft -= 150
})

slideRight.addEventListener('click', function(){
  document.getElementById('lifeimg-gallery').scrollLeft += 150
})

// map 
function initMap() {
    const coord = { lat: 28.7041, lng: 77.1025 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: coord,
      mapId: "efffb52a8e985f64",
    });
    const marker = new google.maps.Marker({
      position: coord,
      map: map,
    });
} 


// video slider
var swiper = new Swiper('.video-slider', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }
});

// clients/brands slider
var swiper = new Swiper('.brand-slider', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
      delay: 1500,
      disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      450: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
      1200: {
          slidesPerView: 5,
      },
  }
}); 



