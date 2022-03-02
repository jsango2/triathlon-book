import React from "react"

import { WrapNasaOrdinacija, ParagraphText, Title, Text } from "./styles.js"
const NasaOrdinacija = () => {
  return (
    <WrapNasaOrdinacija>
      <Text>
        <Title>Naša ordinacija</Title>
        <ParagraphText>
          Kolega Dental & Aesthetic medicine više od pet godina nudi usluge
          neinvazivne estetske medicine poput injekcijski dermalni fileri, botox
          i terapija krvnom plazmom (PRP). Usluge su na visokom profesionalnom
          nivou i prilagođene induvidualnim potrebama.
        </ParagraphText>
      </Text>
    </WrapNasaOrdinacija>
  )
}

export default NasaOrdinacija
