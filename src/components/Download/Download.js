import React from "react"
import {
  DownloadWrap,
  Overlay,
  KnjigaWrap,
  OrnamentWrap,
  StopwatchWrap,
  Text,
  Paragraph,
  Title,
} from "./styles.js"
import Knjiga from "../../../content/assets/knjiga2.png"
import Ornament from "../../../content/assets/OrnamentDownload.svg"
import Stopwatch from "../../../content/assets/PenjanjeStoperica.svg"

const Download = () => {
  return (
    <DownloadWrap>
      <Overlay />
      <KnjigaWrap>
        <img src={Knjiga} alt="book2" width={722} />
      </KnjigaWrap>
      <OrnamentWrap>
        <img src={Ornament} alt="book2" width={239} />
      </OrnamentWrap>
      <StopwatchWrap>
        <img src={Stopwatch} alt="book2" width={479} />
      </StopwatchWrap>
      <Text>
        <Title>DOWNLOAD FREE BONUS MATERIALS</Title>
        <Paragraph>ART Training Schedule for Sprint Beginners</Paragraph>
      </Text>
    </DownloadWrap>
  )
}

export default Download
