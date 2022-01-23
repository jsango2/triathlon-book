import React from "react"
import Form from "../Form/form.js"

import {
  HeroWrap,
  HeroOverlay,
  LogoHero,
  HeroTitle,
  HeroParagraph,
  GradientBottomLine,
} from "./styles.js"
import Lottie from "lottie-react"
import gradientAnimation from "./animation"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"
const Hero = () => {
  const { t } = useTranslation()
  return (
    <HeroWrap>
      <HeroOverlay />

      <LogoHero>
        <img src="/images/RentlioLogo.svg" alt="Logo" />
      </LogoHero>
      <HeroTitle>{t("Hero title")}</HeroTitle>
      <div>
        <HeroParagraph>
          Ručni unosi i računanje, dok desetci gostiju čekaju na svoj red,
          nepotrebne dodatne tablice i rokovnici, nemogućnost ostvarenja većih
          prihoda prodajom dodatnih usluga, provizije na svakom koraku i čekanje
          tjednima na rješavanje problema prijavljenog korisničkoj. Jeste li
          spremni reći dosta?
          <br />
          <br />
          Odbrojavanje za Rentlio digitalnu transformaciju je počelo.
        </HeroParagraph>
      </div>
      <GradientBottomLine>
        <Lottie animationData={gradientAnimation} autoPlay={true} loop={true} />
      </GradientBottomLine>

      <Form />
    </HeroWrap>
  )
}

export default Hero
