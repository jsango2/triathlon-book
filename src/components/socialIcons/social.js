import React from "react"
import Fb from "../../../content/assets/facebook.svg"
import Ig from "../../../content/assets/instagram.svg"
import Ln from "../../../content/assets/linkedin.svg"
import Web from "../../../content/assets/webmail.svg"
import Cart from "../../../content/assets/carticon.svg"
import { Social } from "./styles.js"

const SocialComp = () => {
  return (
    <Social>
      <img src={Fb} alt="Facebook" width="25px" />
      <img src={Ig} alt="Instagram" width="25px" />
      <img src={Ln} alt="Linkedin" width="25px" />
      <img src={Web} alt="WebMail" width="25px" />
      <img src={Cart} alt="Cart" width="25px" />
    </Social>
  )
}

export default SocialComp
