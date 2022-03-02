import styled from "styled-components"
import tockice from "../../../content/assets/tockice.svg"

export const UslugeWrap = styled.div`
  position: relative;
  width: 100%;
  height: 2245px;
  background-color: #32bde312;
  padding-top: 82px;
  padding-left: 118px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const NaslovUsluge = styled.h1`
  font-family: Buenard;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  color: #32bde3;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const ParagraphText = styled.h1`
  width: 718px;
  height: 110px;
  left: 121px;
  top: 951px;

  /* B */

  font-family: Avenir Next;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
  margin-bottom: 53px;
  /* or 22px */

  color: #37313c;

  opacity: 0.8;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Rectangle = styled.div`
  height: 227px;
  width: 449px;
  border-radius: 20px;
  background: #32bde3;
  opacity: 0.1;
  position: absolute;
  left: -90px;
  top: 39px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Rectangle2 = styled.div`
  height: 422px;
  width: 449px;
  border-radius: 20px;
  background: #32bde3;
  opacity: 0.1;
  position: absolute;
  right: -90px;
  top: 59%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Rectangle3 = styled.div`
  height: 227px;
  width: 609px;
  border-radius: 20px;
  background: #32bde3;
  opacity: 0.1;
  position: absolute;
  right: -90px;
  bottom: -100px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapTockice = styled.div`
  height: 227px;
  width: 300px;
  background-image: url(${tockice});
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: -90px;
  top: 59%;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Usluge = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapCard = styled.div`
  position: relative;
  z-index: 2;
  width: 575px;
  height: 190px;
  display: flex;
  margin-bottom: 16px;
  background-color: white;
  border-radius: 20px;
  margin: 8px 16px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapTitleText = styled.div`
  width: 363px;
  padding: 23px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const CardTitle = styled.h2`
  font-family: Avenir Next;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  color: #000000;
  margin-bottom: 7px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const CardText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* or 144% */

  letter-spacing: 0.5px;

  color: #37313c;
  opacity: 0.7;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`