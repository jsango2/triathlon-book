import styled from "styled-components"

export const WrapTestimonialsSection = styled.div`
  position: relative;
  width: 100%;
  height: 528px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    55.82% 227.16% at 80.36% 44.67%,
    #a5a5a5 0%,
    #6d6c6c 100%
  );
  @media screen and (max-width: 1000px) {
    /* padding-left: 145px; */
    justify-content: flex-start;
  }
  @media screen and (max-width: 750px) {
    height: 775px;
  }
  @media screen and (max-width: 440px) {
    height: 887px;
  }
`
export const TestimonailBox = styled.div`
  position: relative;
  width: 561px;
  height: 338px;
  margin-right: 150px;
  @media screen and (max-width: 1000px) {
    margin-left: 145px;
  }
  @media screen and (max-width: 750px) {
    width: 408px;
    margin: 0 auto;
  }
  @media screen and (max-width: 440px) {
    width: 85%;
  }
`
export const Stars = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  @media screen and (max-width: 750px) {
    margin: 0 auto 30px auto;
  }
`
export const TestimonialLogo = styled.div`
  position: absolute;
  width: 386px;
  height: 386px;
  bottom: 20px;
  right: 40px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const TestimonialLogo2 = styled.div`
  position: absolute;
  width: 194px;
  height: 194px;
  top: 20px;
  right: 120px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Navodnik = styled.div`
  position: absolute;
  left: 9%;
  top: 53px;
  @media screen and (max-width: 1000px) {
    img {
      width: 96px;
    }
    left: 3%;
    top: 96px;
  }
  @media screen and (max-width: 750px) {
    left: 50%;
    transform: translate(-50%, 0);
  }
`
export const NaocaleW = styled.div`
  position: absolute;
  left: 4%;
  bottom: 53px;
  @media screen and (max-width: 1000px) {
    /* img {
      display: none;
    } */
    left: -5%;
    bottom: -56px;
    z-index: 3;
  }
`
export const PingvinW = styled.div`
  position: absolute;
  right: -20px;
  top: -120px;
  @media screen and (max-width: 1000px) {
    img {
      display: none;
    }
  }
`
export const OrnamentW = styled.div`
  position: absolute;
  right: 30px;
  top: -50px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`

export const Naslov = styled.h3`
  font-family: Roboto;
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  opacity: 0.6;
  /* or 137% */

  /* Gray 6 */

  color: #f2f2f2;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Text = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* or 137% */

  /* Gray 6 */

  color: #f2f2f2;
  /* or 25px */

  /* SUNRISE / White */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
