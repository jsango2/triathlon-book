import React from "react"
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
} from "./styles.js"
import Book from "../../../content/assets/HeroBook.png"
import Cart from "../../../content/assets/cart.svg"

const Hero = () => {
  return (
    <HeroWrap>
      <Navbar />
      <WrapContent>
        <WrapText>
          <Title>
            <Line />
            Story about business and sport
          </Title>
          <LineUnderTitle />
          <Text>
            Over a long and fruitful business career, Roberto has explored the
            practices of triathlon training and how they positively impact the
            business processes. Not taking anything for granted, he
            conceptualized a method that will lead you through simple steps in
            order to inprove your sales and your overall life standard.{" "}
          </Text>
          <Button>
            <div>ORDER BOOK</div>
            <img src={Cart} alt="Book" width="20px" />
          </Button>
        </WrapText>
        <BookImage>
          <img src={Book} alt="Book" width="488px" />
        </BookImage>
      </WrapContent>
    </HeroWrap>
  )
}

export default Hero
