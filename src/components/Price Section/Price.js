import React from "react"
import {
  PriceWrap,
  WrapContent,
  WrapText,
  BookImage,
  Title,
  Text,
  Button,
  Line,
  Raymond,
  Nyt,
  LineUnderTitle,
} from "./styles.js"
import Book from "../../../content/assets/OpenBook.png"
import Cart from "../../../content/assets/cart.svg"
import PriceBox from "./priceBox"
import { Link as Veza } from "react-scroll"
import useWindowSize from "../helper/usewindowsize"

const Price = () => {
  const size = useWindowSize()
  return (
    <PriceWrap>
      <WrapContent>
        {" "}
        <BookImage>
          <img src={Book} alt="Book" width="700px" />
          <PriceBox text="EUR 19.99" bottom="14px" right="50px" />
          <PriceBox text="GBP 14.99" bottom="74px" right="75px" />
          <PriceBox text="USD 24.99" bottom="134px" right="100px" />
        </BookImage>
        <WrapText>
          <LineUnderTitle />
          <Title>
            <Line />
            From crossing the finish line to climbing the corporate ladder: get
            ready for a new life!
          </Title>

          <Text>
            Roberto takes us on a very funny ride, explaining how key events in
            his life forged the method presented in this book. He carries us
            inside his thinking as he prepares us for the method, and reflects
            on three interpretive discussions: where are you, where do you want
            to go, how will you get there. In following his hilarious examples,
            we get a grounded understanding of each phase of the work.
          </Text>
          <Raymond>
            Raymond Aaron
            <br />
            <Nyt> New York Times Bestselling Author</Nyt>
          </Raymond>
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
      </WrapContent>
    </PriceWrap>
  )
}

export default Price
