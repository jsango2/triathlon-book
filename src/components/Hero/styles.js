import styled from "styled-components"
import bg from "../../../static/images/HeroPhoto2.png"

export const HeroWrap = styled.div`
  position: relative;
  width: 100%;
  height: 760px;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  padding-left: 130px;
  padding-top: 96px;
  @media screen and (max-width: 700px) {
    padding-left: 30px;
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
