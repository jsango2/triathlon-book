import React from "react"
import { GalleryWrap } from "./styles.js"
import p1 from "../../../content/assets/foto7.png"
import p2 from "../../../content/assets/foto8.png"
import p3 from "../../../content/assets/foto9.png"

const GalleryDown = () => {
  return (
    <GalleryWrap>
      <div>
        <img src={p1} alt="p1" width="100%" />
      </div>
      <div>
        <img src={p2} alt="p1" width="100%" />
      </div>
      <div>
        <img src={p3} alt="p1" width="100%" />
      </div>
    </GalleryWrap>
  )
}

export default GalleryDown
