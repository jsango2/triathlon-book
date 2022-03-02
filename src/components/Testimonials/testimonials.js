import React from "react"
import {
  WrapTestimonialsSection,
  TestimonailBox,
  TestimonialLogo,
  TestimonialLogo2,
  Naslov,
  Text,
  TestimonialPhoto,
  Rectangle,
  WrapTockice,
} from "./styles.js"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { testimonialList } from "./testimonialList"

const testimonials = () => {
  console.log(testimonialList)
  const settings = {
    // arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 2000,
    autoplaySpeed: 6000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 450,
    //     settings: {
    //       dots: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       lazyLoad: true,
    //       arrows: false,
    //       speed: 500,
    //     },
    //   },
    // ],
  }
  return (
    <WrapTestimonialsSection>
      <Rectangle />
      <TestimonialLogo2>
        <img src={logo2} alt="logo2" />
      </TestimonialLogo2>
      <WrapTockice>
        <img src={tockice} alt="dots" />
      </WrapTockice>
      <TestimonailBox>
        <Slider {...settings}>
          {testimonialList.map(testimonial => (
            <>
              <Naslov>{testimonial.ime}</Naslov>
              <Text>{testimonial.testimonial}</Text>
            </>
          ))}
        </Slider>
        <TestimonialLogo>
          <img src={logo} alt="logo" />
        </TestimonialLogo>
      </TestimonailBox>
      <TestimonialPhoto>
        <img src={photo} alt="logo" />
      </TestimonialPhoto>
    </WrapTestimonialsSection>
  )
}

export default testimonials
