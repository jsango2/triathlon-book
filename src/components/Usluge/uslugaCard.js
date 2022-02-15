import React from "react"
import { WrapCard, WrapTitleText, CardText, CardTitle } from "./styles.js"

const uslugaCard = ({ photo, text, title }) => {
  return (
    <WrapCard>
      <img src={photo} alt="" />
      <WrapTitleText>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </WrapTitleText>
    </WrapCard>
  )
}

export default uslugaCard
