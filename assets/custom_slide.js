$('.blog__posts').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

jQuery('.marqueee').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
   centerMode: true,
    centerPadding: '100px',
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  pauseOnHover: false,
  arrows: false,
  cssEase: 'linear',
    responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});