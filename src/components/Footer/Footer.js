import React from "react"
import {
  FooterWrap,
  ContentWrap,
  Title,
  SubTitle,
  Social,
  Copyright,
  Divider,
} from "./styles.js"
import Fb from "../../../content/assets/facebook.svg"
import Ig from "../../../content/assets/instagram.svg"
import Ln from "../../../content/assets/linkedin.svg"
import Web from "../../../content/assets/webmail.svg"
import Cart from "../../../content/assets/carticon.svg"

const Footer = () => {
  return (
    <FooterWrap>
      <ContentWrap>
        <Title>
          Challenges make us explore the limits of our comfort zone and confront
          us with our fears.
        </Title>
        <SubTitle>
          From Triathlon to Decision Making: The Method to Success
        </SubTitle>
        <Social>
          <img src={Fb} alt="Facebook" width="25px" />
          <img src={Ig} alt="Instagram" width="25px" />
          <img src={Ln} alt="Linkedin" width="25px" />
          <img src={Web} alt="WebMail" width="25px" />
          <img src={Cart} alt="Cart" width="25px" />
        </Social>
        <Divider />
        <Copyright>
          © 2022 BEYOND THE METHOD / All Rights Reserved / Web design{" "}
          <strong>SUTRA</strong>
        </Copyright>
      </ContentWrap>
    </FooterWrap>
  )
}

export default Footer
