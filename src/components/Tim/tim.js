import React from "react"
import {
  WrapTim,
  Title,
  WrapText,
  Image,
  ParagraphText,
  Rectangle,
} from "./styles.js"
import blurbg from "../../../content/assets/blurbg.png"

const tim = () => {
  return (
    <WrapTim>
      <Rectangle />
      <Image></Image>
      <WrapText>
        <Title>Tim stručnjaka s preko 30 godina iskustva</Title>
        <ParagraphText>
          Redovito odlaženje stomatologu vam pomaže u održavanju zdravlja i
          ljepote vašeg osmjeha. Kolega Dental & Aesthetic vam pruža vrhunsku
          uslugu, prilagođenu individualnim potrebama. Kvalitetna, funkcionalna
          rješenja i tretmane u općoj stomatologiji, dentalne protetici,
          implantologiji ili estetskoj stomatologiji.{" "}
        </ParagraphText>
      </WrapText>
    </WrapTim>
  )
}

export default tim
