import React from "react"
import { BoxWrap } from "./styles.js"

const PriceBox = ({ text, bottom, right }) => {
  return (
    <BoxWrap bottom={bottom} right={right}>
      {text}
    </BoxWrap>
  )
}

export default PriceBox
