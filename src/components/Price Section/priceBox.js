import React from "react"
import Navbar from "../Navigation/navbar"
import { BoxWrap } from "./styles.js"
import Book from "../../../content/assets/OpenBook.png"
import Cart from "../../../content/assets/cart.svg"

const PriceBox = ({ text, bottom, right }) => {
  return (
    <BoxWrap bottom={bottom} right={right}>
      {text}
    </BoxWrap>
  )
}

export default PriceBox
