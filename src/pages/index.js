import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"
import Testimonial from "../components/testimonial/testimonial"
import FourFacts from "../components/fourFacts/fourFacts"
import Support from "../components/support/support"
import { graphql, Link as GatsbyLink } from "gatsby"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"
import i18next from "i18next"

const BlogIndex = ({ data, location }) => {
  console.log(data)
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Hero />
      <Testimonial />
      <FourFacts />
      <Support />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
