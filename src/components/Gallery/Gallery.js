import React from "react"
import { GalleryWrap } from "./styles.js"
import p1 from "../../../content/assets/foto1.png"
import p2 from "../../../content/assets/foto2.png"
import p3 from "../../../content/assets/foto3.png"
import p4 from "../../../content/assets/foto4.png"
import p5 from "../../../content/assets/foto5.png"
import p6 from "../../../content/assets/foto6.png"

const Gallery = () => {
  return (
    <GalleryWrap>
      <div style={{ gridArea: " 1 / 1 / 2 / 2 " }}>
        <img src={p1} alt="p1" width="100%" />
      </div>
      <div style={{ gridArea: " 1 / 2 / 2 / 3" }}>
        <img src={p2} alt="p1" width="100%" />
      </div>
      <div style={{ gridArea: " 1 / 3 / 2 / 4 " }}>
        <img src={p3} alt="p1" width="100%" />
      </div>
      <div style={{ gridArea: "2 / 1 / 3 / 2 " }}>
        <img src={p4} alt="p1" width="100%" />
      </div>
      <div style={{ gridArea: " 2 / 2 / 3 / 3" }}>
        <img src={p5} alt="p1" width="100%" />
      </div>
      <div style={{ gridArea: " 2 / 3 / 3 / 4 " }}>
        <img src={p6} alt="p1" width="100%" />
      </div>
    </GalleryWrap>
  )
}

export default Gallery
