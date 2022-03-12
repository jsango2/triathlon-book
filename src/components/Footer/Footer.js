import React from "react"
import {
  FooterWrap,
  ContentWrap,
  Title,
  SubTitle,
  Copyright,
  Divider,
} from "./styles.js"

import SocialComp from "../socialIcons/social.js"

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
        <SocialComp />
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
