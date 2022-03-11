import React from "react"
import {
  WrapTestimonialsSection,
  TestimonailBox,
  PingvinW,
  NaocaleW,
  Naslov,
  Text,
  OrnamentW,
  Stars,
  Navodnik,
} from "./styles.js"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { testimonialList } from "./testimonialList"
import Star from "../../../content/assets/ActiveStar.png"
import Navodnici from "../../../content/assets/Navodnici.svg"
import Pingvin from "../../../content/assets/Pingvin.svg"
import Ornament from "../../../content/assets/Ornament.svg"
import Naocale from "../../../content/assets/naocale.svg"

const Testimonials = () => {
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
    <WrapTestimonialsSection id="testimonial">
      <Navodnik>
        <img src={Navodnici} alt="Quote" />
      </Navodnik>
      <NaocaleW>
        <img src={Naocale} alt="Quote" />
      </NaocaleW>
      <PingvinW>
        <img src={Pingvin} alt="Quote" />
      </PingvinW>
      <OrnamentW>
        <img src={Ornament} alt="Quote" />
      </OrnamentW>
      <TestimonailBox>
        <Stars>
          <img src={Star} alt="star" width="20px" />
          <img src={Star} alt="star" width="20px" />
          <img src={Star} alt="star" width="20px" />
          <img src={Star} alt="star" width="20px" />
          <img src={Star} alt="star" width="20px" />
        </Stars>
        <Slider {...settings}>
          {testimonialList.map(testimonial => (
            <React.Fragment key={testimonial.ime}>
              <Text>{testimonial.testimonial}</Text>
              <Naslov>{testimonial.ime}</Naslov>
            </React.Fragment>
          ))}
        </Slider>
        {/* <TestimonialLogo></TestimonialLogo> */}
      </TestimonailBox>
    </WrapTestimonialsSection>
  )
}

export default Testimonials
