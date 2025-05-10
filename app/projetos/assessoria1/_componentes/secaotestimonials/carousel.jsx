"use client";
import Carousel from "react-bootstrap/Carousel";
import { SetaSVG } from "../../_svgs/svgs";

export default function CarouselTestimonials(props) {
  return (
    <Carousel interval={4000} prevIcon={<SetaSVG />} nextIcon={<SetaSVG />}>
      {props.items.map((value, index) => (
        <Carousel.Item key={index}>{value}</Carousel.Item>
      ))}
    </Carousel>
  );
}
