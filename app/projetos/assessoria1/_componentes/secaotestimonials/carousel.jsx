"use client";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselTestimonials(props) {
  return (
    <Carousel
      interval={4000}
      prevIcon={<div className="prev"></div>}
      nextIcon={<div className="next"></div>}
    >
      {props.items.map((value, index) => (
        <Carousel.Item key={index}>{value}</Carousel.Item>
      ))}
    </Carousel>
  );
}
