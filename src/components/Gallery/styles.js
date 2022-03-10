import styled from "styled-components"

export const GalleryWrap = styled.div`
  position: relative;
  width: 100%;
  height: 751px;
  background: radial-gradient(
    55.82% 227.16% at 80.36% 44.67%,
    #363636 0%,
    #575757 100%
  );
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 700px) {
    /* padding-left: 30px; */
    /* order: 1;
    margin-bottom: 1rem; */
  }
`
