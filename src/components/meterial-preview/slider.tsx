'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card";
import Products from '@/utils/products-array'


const ImageSlider = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
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
          slidesToScroll: 2,
          initialSlide: 2
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
  };
  return (
    <div className="slider-container max-w-[1340px] mx-auto absolute bottom-[80px] left-0 right-0">
      <Slider {...settings} className="gap-5">
        {Products.map((data) => {
          const {productImage , title , description} = data;
          return (
            <Card productImage={productImage} title={title} description={description} />
          )
        }
        )}
      </Slider>
    </div>
  );
}

export default ImageSlider;
