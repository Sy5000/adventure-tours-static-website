// library
import { Carousel, CarouselSlide } from "@mantine/carousel";
// custom styles
import classes from "./Testimonials.module.css";
// fetch data
import data from "../data.js";

export default function Testimonials() {
  // map data (data = array of various different app data objects)
  const testimonials = data.testimonials.map((testimonial) => {
    return (
      <Carousel.Slide
        classNames={{ slide: classes.slide }}
        key={testimonial.id}
      >
        <p className={classes.review}>{testimonial.review}</p>
        <div className={classes.reviewer}>
          <p>{testimonial.name}</p>
          <p>{testimonial.country}</p>
        </div>
      </Carousel.Slide>
    );
  });
  // render slides in carousel
  return (
    <>
      <div className={classes.title}>
        <h6> &#91; Testimonial &#93;</h6>
      </div>
      <Carousel height={200} classNames={classes} loop>
        {testimonials}
      </Carousel>
    </>
  );
}
