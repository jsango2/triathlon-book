import styled from "styled-components"

export const PriceWrap = styled.div`
  position: relative;
  width: 100%;
  height: 750px;
  background: radial-gradient(
    52.93% 215.39% at 33.32% 46.61%,
    #a5a5a5 0%,
    #6d6c6c 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    padding-top: 50px;
    padding-bottom: 70px;
    height: auto;
  }
`
export const WrapContent = styled.div`
  position: relative;
  width: 1150px;
  height: 531px;
  margin-right: auto;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 1000px) {
    margin-left: -240px;

    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
  @media screen and (max-width: 750px) {
    margin: 0 auto;
    height: auto;
    flex-direction: column;
  }
`
export const WrapText = styled.div`
  position: relative;
  width: 392px;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 1000px) {
    width: 335px;
  }
  @media screen and (max-width: 750px) {
    width: 404px;
  }
  @media screen and (max-width: 440px) {
    width: 85vw;
  }
`
export const BookImage = styled.div`
  position: relative;
  z-index: 2;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 440px) {
    left: 50%;
    transform: translate(-66%);
  }
`
export const Line = styled.div`
  position: absolute;
  top: 68px;
  z-index: 1;
  left: -265px;
  height: 2px;
  width: 243px;
  background-color: red;

  @media screen and (max-width: 750px) {
    display: none;
  }
`
export const LineUnderTitle = styled.div`
  position: relative;
  margin: 75px auto 25px auto;
  height: 2px;
  width: 243px;
  background-color: red;

  @media screen and (min-width: 750px) {
    display: none;
  }
`
export const BoxWrap = styled.div`
  position: absolute;
  z-index: 1;
  bottom: ${props => props.bottom};
  right: ${props => props.right};

  height: 43px;
  width: 234px;
  background: #c70000;
  /* Material Design/04 dp */

  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    /* right: ${props => props.right}; */
    right: calc(${props => props.right} + 70px);
  }
  @media screen and (max-width: 440px) {
    /* right: ${props => props.right}; */
    right: calc(${props => props.right} + 50px);
  }
  @media screen and (max-width: 440px) {
    width: 135px;
  }
`
export const Title = styled.h1`
  position: relative;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 43px;
  /* or 119% */

  /* Gray 6 */

  color: #f2f2f2;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    text-align: center;
    font-size: 28px;
  }
`
export const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px;
  /* or 143% */

  /* Gray 6 */

  color: #f2f2f2;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`
export const Raymond = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  text-align: right;
  letter-spacing: -0.02em;
  margin-top: 40px;
  color: #ffffff;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`
export const Nyt = styled.p`
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  text-align: right;
  letter-spacing: -0.02em;

  color: #ffffff;

  @media screen and (max-width: 750px) {
    text-align: center;
  }
`
export const Button = styled.a`
  width: 194px;
  height: 56px;
  position: relative;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  background: #bdbdbd;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  /* identical to box height */
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin-top: 50px;
  cursor: pointer;
  color: #ebf4f8;
  padding: 0 23px;
  /* padding-left: 130px;
  padding-top: 96px; */
  transition: all 0.3s ease-out;
  text-decoration: none;
  &:hover {
    background: #d6d6d6;
  }
  &:active {
    background: #a7a6a6;
  }
  @media screen and (max-width: 750px) {
    margin: 50px auto 0 auto;
  }
`
