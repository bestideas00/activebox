// fixed menu 
$(window).scroll(function(){
  if($(window).scrollTop() > 200){
    $(".menu").addClass("fixed_menu")
  }else{
    $(".menu").removeClass("fixed_menu")
  }
})

// back_2_top
$(".back_2_top").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})

$(window).scroll(function(){
  if($(window).scrollTop() > 200){
    $(".back_2_top").fadeIn()
  }else{
    $(".back_2_top").fadeOut()
  }
})

// client_slider_left
$('.client_slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    asNavFor: '.text_slider',
    responsive: [
      {
        breakpoint: 1200.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// client_slider_right
$('.text_slider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  asNavfor: '.client_slider',
  responsive: [
    {
      breakpoint: 1200.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


