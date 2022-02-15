import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"

import { graphql } from "gatsby"
import Usluge from "../components/Usluge/usluge"
import Brojke from "../components/Brojke/brojke"
import Tim from "../components/Tim/tim"
import RadnoVrijeme from "../components/RadnoVrijeme/radnoVrijeme"
import Formular from "../components/Formular/formular"
import Testimonials from "../components/Testimonials/testimonials"
import FAQ from "../components/FAQ/faq"
import NasaOrdinacija from "../components/NasaOrdinacija/NasaOrdinacija"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />
      <Hero />
      <Usluge />
      <Brojke />
      <Tim />
      <RadnoVrijeme />
      <Formular />
      <Testimonials />
      <FAQ />
      <NasaOrdinacija />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
