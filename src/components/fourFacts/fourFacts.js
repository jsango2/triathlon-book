import React from "react"
import Form from "../Form/form.js"
import {
  FourFactsWrap,
  Box,
  BoxGreenTitle,
  Title,
  Paragraph,
} from "./styles.js"

const FourFacts = () => {
  return (
    <FourFactsWrap>
      <Box style={{ gridArea: " 1 / 1 / 2 / 2", width: "416px" }}>
        <BoxGreenTitle>Jednostavno</BoxGreenTitle>
        <Title>Cjelovito rješenje za vaš hotel</Title>
        <Paragraph>
          Rentlio je PMS sustav, booking engine i channel manager u jednom.
          Potreba za dodatnim osobljem, više-tjedne implementacije i
          tradicionalni sustavi instalirani na vašim računalima su stvar
          prošlosti.{" "}
        </Paragraph>
      </Box>
      <Box style={{ gridArea: " 1 / 2 / 2 / 3" }}>
        <BoxGreenTitle>Fleksibilno</BoxGreenTitle>
        <Title>Neka su odluke u vašim rukama.</Title>
        <Paragraph>
          Rentlijevo fleksibilno rješenje, javnim API ključem, omogućava slobodu
          odabira računovodstvenih, komunikacijskih i ostalih usluga prema vašoj
          želji i potrebi. Budite vi oni koji odlučuju koje usluge odgovaraju
          potrebama vašeg hotela, ne dopustite da vas se ograničava.
        </Paragraph>
      </Box>
      <Box style={{ gridArea: " 2 / 1 / 3 / 2" }}>
        <BoxGreenTitle>Efikasno</BoxGreenTitle>
        <Title>Oslobodite vrijeme za gosta, oni vas trebaju.</Title>
        <Paragraph>
          Zaboravite na ručna odvajanja faktura, nepregledne excel tablice,
          čekanje vječnosti na poslovna izvješća, skeniranje dokumenata i
          neugodne tišine dok se ekran učitava. Pružite gostu iskustvo koje će
          nadmašiti sva očekivanja.
        </Paragraph>
      </Box>
      <Box style={{ gridArea: " 2 / 2 / 3 / 3" }}>
        <BoxGreenTitle>Profitabilno</BoxGreenTitle>
        <Title>Prepoznajte prilike, povisite prihode.</Title>
        <Paragraph>
          Većina uspješnih prodajnih aktivnosti se odvija prije boravka u
          hotelu. Automatizacija zadataka i dostupna analitika omogućit će vam
          efikasnije segmentiranje i targetiranje gostiju, centralizaciju svih
          upita i potrebne informacije samo jednim klikom.
        </Paragraph>
      </Box>
    </FourFactsWrap>
  )
}

export default FourFacts
