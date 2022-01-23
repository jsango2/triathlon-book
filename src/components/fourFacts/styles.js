import styled from "styled-components"
import bg4 from "../../images/bg4.png"

export const FourFactsWrap = styled.div`
  position: relative;
  width: 100%;
  height: 1080px;
  background-image: url(${bg4});
  background-position: center;
  background-size: cover;
  padding-top: 140px;
  padding-left: 130px;
  padding-right: 130px;
  padding-bottom: 130px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 188px;
  grid-row-gap: 100px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Box = styled.div`
  position: relative;
  width: 496px;
  height: 250px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const BoxGreenTitle = styled.h5`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  /* Green */

  color: #a9cf3a;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Title = styled.h2`
  width: 100%;
  height: 120px;

  font-family: "Roboto", sans-serif;

  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  /* or 125% */
  margin-bottom: 30px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Paragraph = styled.h2`
  width: 493px;
  /* height: 104px; */
  font-family: "Roboto", sans-serif;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
