import styled from "styled-components"
import bg from "../../../content/assets/crte.svg"

export const DownloadWrap = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  background: radial-gradient(
    55.82% 227.16% at 80.36% 44.67%,
    #363636 0%,
    #575757 100%
  );

  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 1000px) {
    height: 623px;
  }
`
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const KnjigaWrap = styled.div`
  position: relative;
  z-index: 2;
  top: 30px;
  left: -120px;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    left: 50%;
    transform: translate(-50%, 0);
    img {
      width: 575px;
    }
  }
`
export const OrnamentWrap = styled.div`
  position: relative;
  z-index: 1;
  top: -150px;
  left: 320px;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    top: -45px;
    left: -57px;
  }
`
export const StopwatchWrap = styled.div`
  position: absolute;
  z-index: 1;
  top: 50px;
  right: 20px;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export const Text = styled.a`
  position: absolute;
  cursor: pointer;
  z-index: 5;
  bottom: 64px;
  right: 37%;
  width: 305px;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 1000px) {
    right: 10%;
    bottom: 134px;
  }
  @media screen and (max-width: 750px) {
    right: 50%;
    transform: translate(50%, 0);
  }
`
export const Title = styled.h1`
  position: relative;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  /* or 129% */

  /* Gray 6 */

  color: #f2f2f2;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Paragraph = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 137% */

  text-align: center;

  /* Gray 6 */

  color: #f2f2f2;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
