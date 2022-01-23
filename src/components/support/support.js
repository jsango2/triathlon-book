import React from "react"
import Form from "../Form/form.js"
import { SupportWrap } from "./styles.js"
import { graphql, Link as GatsbyLink } from "gatsby"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
  I18nextContext,
} from "gatsby-plugin-react-i18next"

const Support = () => {
  const context = React.useContext(I18nextContext)
  console.log(context.language)
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()
  return (
    <SupportWrap>
      {t("Home")}
      {languages.map(lng => (
        <li key={lng}>
          <a
            href="#"
            onClick={e => {
              e.preventDefault()
              changeLanguage(lng)
            }}
          >
            {lng}
          </a>
        </li>
      ))}
    </SupportWrap>
  )
}

export default Support
