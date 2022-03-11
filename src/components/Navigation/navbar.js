import React from "react"
// import Logo from "../../../content/assets/LogoNavbar.svg"
import { Link } from "gatsby"
import { NavbarWrap, LogoWrap, LinkWrap, SingleLink } from "./styles.js"
import { Links } from "./links"
import { Link as Veza } from "react-scroll"
import useWindowSize from "../helper/usewindowsize"

const Navbar = () => {
  const size = useWindowSize()

  return (
    <NavbarWrap>
      {/* <img src={Logo} width="398px" alt="" /> */}
      <LinkWrap>
        <SingleLink>
          <Veza
            activeClass="active"
            to="testimonial"
            spy={true}
            smooth="easeInOutCubic"
            offset={50}
            duration={1800}
          >
            <Link activeClassName="activeLink">TESTIMONIALS</Link>
          </Veza>
        </SingleLink>
        <SingleLink>
          <Veza
            activeClass="active"
            to="author"
            spy={true}
            smooth="easeInOutCubic"
            offset={50}
            duration={1800}
          >
            <Link activeClassName="activeLink">AUTHOR</Link>
          </Veza>
        </SingleLink>
        <SingleLink>
          {size.width > 750 ? (
            <Veza
              activeClass="active"
              to="order"
              spy={true}
              smooth="easeInOutCubic"
              offset={-40}
              duration={1800}
            >
              <Link activeClassName="activeLink">ORDER BOOK</Link>
            </Veza>
          ) : (
            <a href="mailto:media@applythemethod.com?subject=Book order">
              ORDER BOOK
            </a>
          )}
        </SingleLink>
      </LinkWrap>
    </NavbarWrap>
  )
}

export default Navbar
