// library
import { Carousel, CarouselSlide } from "@mantine/carousel";
// custom styles
import classes from "./Testimonials.module.css";
// fetch data
import testimonialData from "../data.js";

export default function Testimonials() {
  // map data
  const testimonials = testimonialData.map((testimonial) => {
    return (
      <Carousel.Slide
        classNames={{ slide: classes.slide }}
        key={testimonial.id}
      >
        <h5>Testimonials</h5>
        <p>{testimonial.review}</p>
        <p>{testimonial.name}</p>
        <p>{testimonial.country}</p>
      </Carousel.Slide>
    );
  });

  return (
    <>
      <Carousel withIndicators height={200} loop>
        {testimonials}
      </Carousel>
    </>
  );
}

// just use map???
