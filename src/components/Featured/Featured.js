import React from "react"
import {
  FeaturedWrap,
  WrapBook,
  Text,
  WatchWrap,
  MedalsWrap,
  Up,
  Elipse,
  Elipse2,
} from "./styles.js"
import FeaturedBook from "../../../content/assets/featuredBook.png"
import ElipseSvg from "../../../content/assets/Ellipse.svg"
import Watch from "../../../content/assets/watch.svg"
import Medals from "../../../content/assets/medals.svg"
import GalleryDown from "../Gallery2/GalleryDown.js"

const Featured = () => {
  return (
    <FeaturedWrap>
      <Up>
        <Elipse>
          <img src={ElipseSvg} alt="segment" width="100%" />
        </Elipse>
        <WatchWrap>
          <img src={Watch} alt="watch" />
        </WatchWrap>
        <MedalsWrap>
          <img src={Medals} alt="medals" />
        </MedalsWrap>
        <Text>
          Challenges make us explore the limits of our comfort zone and confront
          us with our fears. Overcoming these fears and achieving what once
          appeared impossible will inspire confidence, determination, and peace
          of mind. And like most things in life, the harder things have the
          greater reward. <br />
          <br /> In my career as both triathlete and top sales manager I was
          lucky enough to share trainings and moments with top sales performers,
          meet world champions and chat with athletes of all age groups. I
          gathered all this knowledge to present it to you in a simple and funny
          way in this book.
        </Text>
        <WrapBook>
          <img src={FeaturedBook} alt="featured book" />
        </WrapBook>
        <Elipse2>
          <img src={ElipseSvg} alt="segment2" width="100%" />
        </Elipse2>
      </Up>

      <GalleryDown />
    </FeaturedWrap>
  )
}

export default Featured
