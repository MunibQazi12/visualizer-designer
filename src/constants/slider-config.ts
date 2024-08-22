export const sliderSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        centerPadding: "60px",
        slidesToShow: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1070,
      settings: {
        centerPadding: "60px",
        slidesToShow: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
