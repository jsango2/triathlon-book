import React from "react"
import Navbar from "../Navigation/navbar"
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
} from "./styles.js"
import Robbie from "../../../content/assets/Robbie.png"
import Fb from "../../../content/assets/facebook.svg"
import Ig from "../../../content/assets/instagram.svg"
import Ln from "../../../content/assets/linkedin.svg"
import Web from "../../../content/assets/webmail.svg"
import Potpis from "../../../content/assets/potpis.svg"
import KnjigaForm from "../../../content/assets/KnjigaForm.png"
import Form from "./Form"
import SUperman from "../../../content/assets/FATMAN.svg"
import SocialComp from "../socialIcons/social"

const FormSection = () => {
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
            of 42, and he managed to qualify for the Ironman
            Worldchamiopnship in Kona, Hawai'i starting from as an un-sportive
            endurance background as can be. This same daring attitude helped him
            to be a successful sales director for a Swiss telecom company coming
            from a completely different background. He went on to successfully
            found Asiaccess (www.asiaccess.com), a company specialized in
            outsourced sales and marketing services in Asia for non-Asian
            companies.{" "}
            <div style={{ marginTop: "20px" }}>
              {" "}
              Now an acclaimed public speaker, he happily shares his method for
              success while still enjoying his passion for swimming, biking and
              running as well as pizzas!
            </div>
          </Text>
          <SocialWrap>
            <SocialComp />
          </SocialWrap>
        </WrapText>
        <BookImage>
          <img src={Robbie} alt="Robbie" width="650px" />
          <img src={Potpis} alt="Robbie" width="250px" />
        </BookImage>
      </WrapContent>
      <SupermanMobile id="orderMobile">
        <img src={SUperman} alt="superman mobile" width={224} />
      </SupermanMobile>
      <FormTitleMobile>Contact us / Order book</FormTitleMobile>
      <Button>Send Message / Order</Button>
      <FormLower>
        <Form />
        <img src={KnjigaForm} alt="Book" width="455px" />
      </FormLower>
    </WrapFormSection>
  )
}

export default FormSection
