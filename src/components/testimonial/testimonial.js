import React from "react"
import Form from "../Form/form.js"
import {
  TestimonialWrap,
  ContentWrap,
  Stars,
  Title,
  Paragraph,
  AvatarContent,
  WrapNameCredential,
  Name,
  Credential,
} from "./styles.js"
import Star from "../../images/Star.svg"
import Guy from "../../images/fotoGuy.png"

const Testimonial = () => {
  return (
    <TestimonialWrap>
      <ContentWrap>
        <Stars>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
        </Stars>
        <Title>“Excellent experience using Rentlio”</Title>
        <Paragraph>
          They have amazing support, always ready to help. Product is very
          intuitive and well structured. Rentlio allowed us to make everything
          automatic
        </Paragraph>
        <AvatarContent>
          <img src={Guy} alt="Guy" width="80" height="80" />
          <WrapNameCredential>
            <Name>Guy Hawkins</Name>
            <Credential>Hotel manager, Valamar Isabella Miramare</Credential>
          </WrapNameCredential>
        </AvatarContent>
      </ContentWrap>
    </TestimonialWrap>
  )
}

export default Testimonial
