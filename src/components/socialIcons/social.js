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
      <a href="https://www.facebook.com/carfagno">
        <img src={Fb} alt="Facebook" width="25px" />
      </a>
      <a href="https://instagram.com/tri_robbie?utm_medium=copy_link">
        <img src={Ig} alt="Instagram" width="25px" />
      </a>
      <a href="ttps://www.linkedin.com/in/carfagno6471/?originalSubdomain=sg">
        {" "}
        <img src={Ln} alt="Linkedin" width="25px" />
      </a>
      <a href="mailto:media@applythemethod.com">
        <img src={Web} alt="WebMail" width="25px" />
      </a>
      {/* <img src={Cart} alt="Cart" width="25px" /> */}
    </Social>
  )
}

export default SocialComp
