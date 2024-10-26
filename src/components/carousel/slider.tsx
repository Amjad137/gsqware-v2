"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

type Props = {};

const images = {
  image1:
    "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
  image2:
    "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image3:
    "https://images.pexels.com/photos/4173116/pexels-photo-4173116.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  image4:
    "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  image5:
    "https://images.pexels.com/photos/5094484/pexels-photo-5094484.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
};

const imagesArray = Object.values(images);
const SliderComponent = (props: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "380px",
  };
  return (
    <Slider {...settings}>
      {imagesArray.map((image, index) => {
        return (
          <div key={index}>
            <div className="flex items-center justify-center">
              <Image
                className="rounded-lg"
                src={image}
                alt="image"
                height={480}
                width={720}
              />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
