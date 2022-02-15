import styled from "styled-components"

export const NavbarWrap = styled.div`
  position: relative;
  width: 100%;
  height: 111px;
  display: flex;
  align-items: center;
  padding-right: 90px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Logo = styled.div`
  position: relative;
  width: 200px;
  height: 60px;
  background-image: url("/images/LogoNavbar.svg");
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const LinkWrap = styled.div`
  margin-left: auto;
  position: relative;
  width: 800px;
  /* height: 40px; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const SingleLink = styled.div`
  position: relative;
  margin: 0 10px;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #aea8b2;
    margin: 0 0;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
