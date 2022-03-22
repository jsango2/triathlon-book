import React from "react"
import {
  WrapFormSection,
  WrapContent,
  WrapText,
  BookImage,
  Title,
  Text,
  SocialWrap,
  Line,
  FormLower,
  SupermanMobile,
  FormTitleMobile,
  Button,
  WrapStrelice,
} from "./styles.js"
import Robbie from "../../../content/assets/Robbie.png"

import Potpis from "../../../content/assets/potpis.svg"
import Strelice from "../../../content/assets/streliceLijevo.svg"
import KnjigaForm from "../../../content/assets/KnjigaForm.png"
import Form from "./Form"
import SUperman from "../../../content/assets/FATMAN.svg"
import SocialComp from "../socialIcons/social"
import { Link as Veza } from "react-scroll"
import useWindowSize from "../helper/usewindowsize"

const FormSection = () => {
  const size = useWindowSize()
  return (
    <WrapFormSection id="author">
      <WrapContent>
        {" "}
        <WrapText>
          <Title>
            <Line />
            About the author
          </Title>
          <Text>
            Born in 1971 in beautiful Switzerland to Italian and Croatian
            parents, Roberto Carfagno left home at the age of 19 to explore the
            world. He studied in the USA and then Italy where he lived for 10
            years before moving to Asia. Triathlon crossed his path at the age
            of 42, and he managed to qualify for the Ironman World
            chamiopnship in Kona, Hawai'i starting from as an unathletic
            endurance background as can be. This same daring attitude helped him
            to be a successful sales director for a Swiss telecom company coming
            from a completely different background. He went on to successfully
            found Asiaccess (www.asiaccess.com), a company specialized in
            outsourced sales and marketing services in Asia for non-Asian
            companies. <br />
            <br />
            <br />
            Now an acclaimed public speaker, he happily shares his method for
            success while still enjoying his passion for swimming, biking and
            running as well as pizzas!
          </Text>
          <SocialWrap>
            <SocialComp />
          </SocialWrap>
        </WrapText>{" "}
        <BookImage>
          {/* <img src={Robbie} alt="Robbie" /> */}
          <img src={Potpis} alt="Robbie" width="250px" />
          <WrapStrelice>
            <img src={Strelice} alt="strelice" width="250px" />
          </WrapStrelice>
        </BookImage>
      </WrapContent>
      <SupermanMobile id="orderMobile">
        <img src={SUperman} alt="superman mobile" width={224} />
      </SupermanMobile>
      <FormTitleMobile>Contact us / Order book</FormTitleMobile>
      {size.width > 750 ? (
        <Veza
          activeClass="active"
          to="order"
          spy={true}
          smooth="easeInOutCubic"
          offset={-50}
          duration={1800}
        >
          <Button>
            <div>Send message / Order</div>
          </Button>
        </Veza>
      ) : (
        <Button href="mailto:media@applythemethod.com?subject=Book order">
          <div>Send message / Order</div>
        </Button>
      )}

      <FormLower>
        <Form />
        <img src={KnjigaForm} alt="Book" width="455px" />
      </FormLower>
    </WrapFormSection>
  )
}

export default FormSection
