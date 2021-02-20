import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderImage() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: true,
      };

    return (
       <div className="slider-wrap">
      <Slider {...settings}>
        <div>
          <h3 className="slider-item">
            <img alt="" className="slider-image" src="./images/phone1.svg"  />
          </h3>
        </div>
        <div>
          <h3 className="slider-item">
            <img alt="" className="slider-image" src="./images/phone1.svg"  />
          </h3>
        </div>
        <div>
          <h3 className="slider-item">
            <img alt="" className="slider-image" src="./images/phone1.svg"  />
          </h3>
        </div>
      </Slider>
    </div>
    )
}
