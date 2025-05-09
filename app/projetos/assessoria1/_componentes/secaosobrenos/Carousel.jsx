"use client";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselClient(props) {
  return (
    <>
      <Carousel className="pb-5" controls={false} interval={7000}>
        {props.items.map((value, index) => (
          <Carousel.Item key={index}>{value}</Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
