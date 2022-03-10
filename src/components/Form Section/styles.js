import styled from "styled-components"

export const WrapFormSection = styled.div`
  position: relative;
  width: 100%;
  height: 1598px;
  background: radial-gradient(
    40.54% 164.96% at 65.25% 52.81%,
    #bb3a3a 0%,
    #791111 100%
  );

  padding-top: 130px;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    height: auto;
    padding-top: 0;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
  }
`
export const WrapContent = styled.div`
  position: relative;
  width: 1213px;
  height: 603px;
  margin-left: auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 1000px) {
    margin-left: 57px;

    width: 100%;
  }
  @media screen and (max-width: 750px) {
    height: auto;
    flex-direction: column-reverse;
    margin: 0 auto;
  }
`
export const WrapText = styled.div`
  position: relative;
  width: 462px;

  @media screen and (max-width: 750px) {
    margin-top: 50px;
  }
`
export const BookImage = styled.div`
  position: relative;
  z-index: 2;
  /* padding-left: 130px;
  padding-top: 96px; */
  width: 650px;
  height: 600px;
  margin-left: 130px;
  img {
    position: absolute;
  }
  img:nth-child(1) {
    width: 100vw;
    min-width: 675px;
    max-width: 700px;
  }
  img:nth-child(2) {
    bottom: 0;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 750px) {
    width: 100vw;
    min-width: 675px;
    max-width: 700px;
    margin: 0;
    img:nth-child(2) {
      bottom: 0;
      left: 20px;
    }
  }
`
export const Line = styled.div`
  position: absolute;
  top: 26px;
  z-index: 1;
  left: -265px;
  height: 2px;
  width: 243px;
  background-color: red;

  @media screen and (max-width: 750px) {
    display: none;
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
  }
`
export const FormTitle = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 44px;

  color: #2c2738;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const FormTitleMobile = styled(FormTitle)`
  color: white;
  text-align: center;
  @media screen and (min-width: 750px) {
    display: none;
  }
`
export const SubTitle = styled.h1`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* or 137% */

  color: #2c2738;
  margin-top: 10px;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  /* or 137% */
  margin-top: 35px;
  /* Gray 6 */

  color: #f2f2f2;
  /* padding-left: 130px;
  padding-top: 96px; */
  @media screen and (max-width: 750px) {
    text-align: center;
  }
`
export const FormLower = styled.div`
  width: 100%;
  height: 717px;
  margin-top: 90px;
  display: flex;
  align-items: center;
  img {
    margin-left: 30px;
  }
  @media screen and (max-width: 1000px) {
    img:nth-child(2) {
      display: none;
    }
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`
export const FormBox = styled.div`
  width: 860px;
  height: 650px;
  background-color: white;
  padding-top: 40px;
  padding-right: 40px;
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`
export const TextBox = styled.div`
  position: relative;
  z-index: 2;
  width: 544px;
  height: 572px;
  margin-left: auto;
  form {
    margin-top: 35px;
  }
  input,
  textarea {
    height: 52px;
    background: #ffffff;
    border: 1px solid #dbe2ea;
    box-sizing: border-box;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    margin-top: 6px;
    padding-left: 15px;
  }
  textarea {
    height: 200px;
    padding-top: 10px;
    resize: none;
    background-color: #ffffff;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
  & input[type="submit"] {
    width: 218px;
    height: 56px;
    padding-left: 0;
    background: #eb5757;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
      0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: 6px;

    box-sizing: border-box;
    /* Blue shadow */

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    /* identical to box height, or 167% */
    cursor: pointer;
    color: #ffffff;
    margin: 0 auto;
  }

  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const NYT = styled.p`
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  text-align: right;
  letter-spacing: -0.02em;

  color: #ffffff;

  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const SocialWrap = styled.div`
  margin-top: 65px;
  width: 157px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
  @media screen and (max-width: 750px) {
    margin: 45px auto 0 auto;
  }
`
export const Superman = styled.div`
  position: absolute;
  bottom: 160px;
  z-index: 1;
  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const Button = styled.button`
  position: relative;
  width: 218px;
  height: 56px;
  padding-left: 0;
  background: #eb5757;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;

  box-sizing: border-box;
  /* Blue shadow */
  border: none;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */
  cursor: pointer;
  color: #ffffff;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
export const SupermanMobile = styled.div`
  width: 224px;
  height: 235px;
  position: relative;
  margin: 55px auto 30px auto;
  @media screen and (min-width: 750px) {
    display: none;
  }
`
