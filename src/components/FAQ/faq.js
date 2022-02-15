import React from "react"
import Button from "../Button/Button"
import {
  WrapFaq,
  Photo,
  TextBox,
  Text,
  Rectangle,
  WrapSitneTockice,
  TestimonialLogo,
} from "./styles.js"
import sitnetockice from "../../../content/assets/sitnetockice.svg"
import logo from "../../../content/assets/testimonialLogo.svg"

const faq = () => {
  return (
    <WrapFaq>
      <Rectangle />
      <Photo></Photo>
      <TextBox>
        <Text>
          Na prvom mjestu nam je kvaliteta našeg rada, zadovoljstvo i osmijeh
          naših pacijenata. Ponosimo se tradicijom koja traje već 20 godina.
          Dolaskom u našu ordinciju...
        </Text>
        <Button text="NAJČEŠĆA PITANJA" />
        <Button text="CIJENIK NAŠIH USLUGA" />
        <Button text="SAVJETI NAŠIH STOMATOLOGA" />
      </TextBox>
      <TestimonialLogo>
        <img src={logo} alt="logo" />
      </TestimonialLogo>
      <WrapSitneTockice>
        <img src={sitnetockice} alt="little dots" />
      </WrapSitneTockice>
    </WrapFaq>
  )
}

export default faq
