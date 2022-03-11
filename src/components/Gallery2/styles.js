import styled from "styled-components"

export const GalleryWrap = styled.div`
  position: relative;
  z-index: 0;
  /* top: -106px; */
  width: 100%;
  height: 404px;
  background: radial-gradient(
    55.82% 227.16% at 80.36% 44.67%,
    #363636 0%,
    #575757 100%
  );
  display: flex;
  justify-content: center;
  /* &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -5%;
    left: -5%;
    height: 120px;
    background: #fff;
    -webkit-clip-path: ellipse(50% 60% at 50% 100%);
    clip-path: ellipse(50% 60% at 50% 100%);
  } */
  img {
    width: 101%;
    height: 100%;
    object-fit: cover;
  }
  div {
    width: calc((100% / 3));
    height: 100%;
    margin: 0;
  }
  @media screen and (max-width: 750px) {
    height: 250px;
  }
  @media screen and (max-width: 440px) {
    height: 170px;
  }
`
