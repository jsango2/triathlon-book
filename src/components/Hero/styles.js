import styled from "styled-components"

export const HeroWrap = styled.div`
  position: relative;
  width: 100%;
  height: 750px;
  background: radial-gradient(
    40.54% 164.96% at 65.25% 52.81%,
    #bb3a3a 0%,
    #791111 100%
  );
  @media screen and (max-width: 750px) {
    height: auto;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const WrapContent = styled.div`
  position: relative;
  width: 1030px;
  height: 531px;
  margin: 70px auto 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 1000px) {
    margin: 70px auto 0 57px;
    width: 100%;
  }
  @media screen and (max-width: 750px) {
    margin: 50px auto 0 auto;
    flex-direction: column-reverse;
    height: auto;
  }
`
export const WrapText = styled.div`
  position: relative;
  width: 396px;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 440px) {
    width: 85%;
  }
`
export const BookImage = styled.div`
  position: relative;

  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    img {
      width: 330px;
    }
  }
`
export const Line = styled.div`
  position: absolute;
  top: 25px;
  left: -274px;
  height: 2px;
  width: 243px;
  background-color: red;

  @media screen and (max-width: 750px) {
    display: none;
  }
`
export const LineUnderTitle = styled.div`
  position: relative;
  margin: 25px auto 25px auto;
  height: 2px;
  width: 243px;
  background-color: red;

  @media screen and (min-width: 750px) {
    display: none;
  }
`
export const Title = styled.h1`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  /* or 119% */

  /* Gray 6 */

  color: #f2f2f2;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`
export const Text = styled.p`
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  /* or 140% */
  margin-top: 10px;
  /* Gray 6 */

  color: #f2f2f2;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`
export const Button = styled.div`
  width: 194px;
  height: 56px;
  position: relative;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  background: #db363b;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  /* identical to box height */
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  color: #ebf4f8;
  padding: 0 23px;
  transition: all 0.3s ease-out;

  /* padding-left: 130px;
  padding-top: 96px; */
  &:hover {
    background: #d4474b;
  }
  &:active {
    background: #af3034;
  }
  @media screen and (max-width: 750px) {
    margin: 50px auto;
  }
`
