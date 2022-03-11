import styled from "styled-components"

export const FooterWrap = styled.div`
  position: relative;
  /* top: -106px; */
  width: 100%;
  height: 491px;
  background: radial-gradient(
    51.29% 208.54% at 76% 33.49%,
    #bb3a3a 0%,
    #791111 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    height: auto;
    padding-top: 65px;
    padding-bottom: 60px;
  }
`
export const ContentWrap = styled.div`
  position: relative;
  /* top: -106px; */
  width: 745px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    width: 75%;
    height: auto;
  }
`
export const Title = styled.h1`
  position: relative;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  /* or 129% */

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
export const SubTitle = styled.p`
  position: relative;
  font-family: "Work Sans", sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */

  text-align: center;

  /* white */
  margin-top: 45px;
  margin-bottom: 25px;
  color: #fcfefe;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    margin-top: 45px;
    margin-bottom: 25px;
    width: 80%;
  }
`
export const Social = styled.div`
  position: relative;
  display: flex;
  width: 230px;
  height: 50px;
  justify-content: space-around;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Divider = styled.div`
  position: relative;
  width: 59%;
  max-width: 600px;
  height: 2px;
  background-color: white;
  margin: 25px auto;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    width: 55%;
    height: 2px;
  }
`
export const Copyright = styled.div`
  position: relative;
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* white */
  text-align: center;
  color: #fcfefe;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    width: 85%;
  }
`
