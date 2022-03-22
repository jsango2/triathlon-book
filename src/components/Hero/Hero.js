import React, { ref } from "react"
import Navbar from "../Navigation/navbar"
import {
  HeroWrap,
  WrapContent,
  WrapText,
  BookImage,
  Title,
  Text,
  Button,
  Line,
  LineUnderTitle,
  WrapBook3,
  WrapBook2,
  WrapBook1,
} from "./styles.js"
import Book1 from "../../../content/assets/oneBook.png"

import Cart from "../../../content/assets/cart.svg"
import { Link as Veza } from "react-scroll"
import useWindowSize from "../helper/usewindowsize"
import { useInView } from "react-intersection-observer"

const Hero = () => {
  const size = useWindowSize()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
    // trigger inView function only once
    triggerOnce: true,
  })
  console.log(inView)
  return (
    <HeroWrap ref={ref}>
      <Navbar />
      <WrapContent>
        <WrapText>
          <Title>
            <Line />A Story About Success In Business and Sport
          </Title>
          <LineUnderTitle />
          <Text>
            Over a long and fruitful business career, Roberto has explored the
            practices of triathlon training and how they positively impact the
            business processes. Not taking anything for granted, he
            conceptualized a method that will lead you through simple steps in
            order to improve your sales and your overall life standard.{" "}
          </Text>
          {size.width > 750 ? (
            <Veza
              activeClass="active"
              to="order"
              spy={true}
              smooth="easeInOutCubic"
              offset={-50}
              duration={1800}
            >
              <Button>
                <div>ORDER BOOK</div>
                <img src={Cart} alt="Book" width="20px" />
              </Button>
            </Veza>
          ) : (
            <Button href="mailto:media@applythemethod.com?subject=Book order">
              <div>ORDER BOOK</div>
              <img src={Cart} alt="Book" width="20px" />
            </Button>
          )}
        </WrapText>
        <BookImage
          className={`slide-hero ${
            inView ? "slide-from-right-hero" : "slide-from-right-hero-start"
          }`}
        >
          <WrapBook3>
            <img src={Book1} alt="Book" width="300px" />
          </WrapBook3>
          <WrapBook2>
            <img src={Book1} alt="Book" width="280px" />
          </WrapBook2>
          <WrapBook1>
            <img src={Book1} alt="Book" width="260px" />
          </WrapBook1>
        </BookImage>
      </WrapContent>
    </HeroWrap>
  )
}

export default Hero
