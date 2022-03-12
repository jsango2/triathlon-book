import styled from "styled-components"

export const FeaturedWrap = styled.div`
  position: relative;
  /* z-index: 1; */
  /* top: -55px; */
  width: 100%;
  height: 1400px;
  /* background-color: #e4e4e4; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  /* clip-path: ellipse(100% 55% at 48% 44%); */
  @media screen and (max-width: 750px) {
    height: auto;
  }
`
export const Up = styled.div`
  position: relative;
  z-index: 1;
  /* top: -55px; */
  width: 100%;
  height: 1000px;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  /* clip-path: ellipse(100% 55% at 48% 44%); */
  /* border-radius: 100%/0 0 100px 100px; */
  @media screen and (max-width: 750px) {
    height: auto;
    padding-top: 60px;
  }
`

export const WrapBook = styled.div`
  position: relative;
  img {
    width: 776px;
  }
  @media screen and (max-width: 440px) {
    img {
      width: 575px;
    }
  }
`
export const MedalsWrap = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  @media screen and (max-width: 1000px) {
    left: -69px;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`
export const WatchWrap = styled.div`
  position: absolute;
  bottom: 100px;
  right: 0;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const Text = styled.div`
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* or 137% */
  width: 607px;
  text-align: center;

  /* 00 Siva */

  color: #2c2738;
  @media screen and (max-width: 750px) {
    font-size: 15px;

    width: 80%;
  }
`
export const Elipse = styled.div`
  position: relative;
  width: 120%;
  top: -50px;
  transform: rotate(180deg);
  @media screen and (max-width: 750px) {
    width: 151%;
    top: -95px;
  }
  @media screen and (max-width: 440px) {
    top: -80px;
  }
`
export const Elipse2 = styled.div`
  position: relative;
  width: 120%;
  bottom: 40px;
  @media screen and (max-width: 750px) {
    bottom: -30px;
  }
  @media screen and (max-width: 420px) {
    bottom: -20px;
  }
`
