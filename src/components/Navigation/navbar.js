import React from "react"
// import Logo from "../../../content/assets/LogoNavbar.svg"
// import { Link } from "gatsby"
import { NavbarWrap, LinkWrap, SingleLink } from "./styles.js"
import { Link as Veza } from "react-scroll"
import useWindowSize from "../helper/usewindowsize"

const Navbar = () => {
  const size = useWindowSize()

  return (
    <NavbarWrap>
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
            <div>TESTIMONIALS</div>
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
            <div>AUTHOR</div>
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
              <div>ORDER BOOK</div>
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
