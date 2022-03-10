import styled from "styled-components"

export const NavbarWrap = styled.div`
  position: relative;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
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
  margin: 0 auto;
  position: relative;
  width: 590px;
  /* height: 40px; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    width: 420px;
  }
`
export const SingleLink = styled.div`
  position: relative;
  margin: 0 10px;
  padding: 5px;
  transition: all 0.3s ease-out;
  bottom: 0;
  a {
    font-family: "Lato";
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    margin: 0 0;
    cursor: pointer;
  }
  &:hover {
    bottom: 3px;
    border-bottom: 1px solid white;
  }

  @media screen and (max-width: 750px) {
    a {
      font-family: "Lato";
      font-size: 12px;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      margin: 0 0;
      cursor: pointer;
    }
  }
`
