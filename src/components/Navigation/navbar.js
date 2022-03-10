import React from "react"
// import Logo from "../../../content/assets/LogoNavbar.svg"
import { Link } from "gatsby"
import { NavbarWrap, LogoWrap, LinkWrap, SingleLink } from "./styles.js"
import { Links } from "./links"

const Navbar = () => {
  return (
    <NavbarWrap>
      {/* <img src={Logo} width="398px" alt="" /> */}
      <LinkWrap>
        {Links.map(e => (
          <SingleLink key={e.link}>
            <Link to={e.link} activeClassName="activeLink">
              {e.veza}
            </Link>
          </SingleLink>
        ))}
      </LinkWrap>
    </NavbarWrap>
  )
}

export default Navbar
