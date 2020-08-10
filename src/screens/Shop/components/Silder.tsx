import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Props {
  images: any[];
}

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1
  }
};

export function Slider(props: Props) {
  const CustomDot = ({ onClick, ...rest }: any) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType } 
    } = rest;
    const carouselItems = props.images;

    return (
      <Link
        to="#"
        onClick={() => onClick()}
        style={{ opacity: active ? 0.5: 1 }}
      >
        <img src={carouselItems[index]} alt="" style={{ width: 100, height: 75 }}/>
      </Link>
    )
  }

  return (
    <Carousel
      swipeable
      draggable
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      slidesToSlide={1}
      centerMode={false}
      customDot={<CustomDot/>}
      renderDotsOutside={true}
      showDots
    >
      {props.images.map((x, i) => {
        return (
          <img
            src={x}
            alt={x}
            key={i}
            style={{
              width: '100%',
              height: 500,
              display: 'block',
              objectFit: 'cover'
            }}
          />
        );
      })}
    </Carousel>
  );
}
