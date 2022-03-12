import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"

import { graphql } from "gatsby"
import Price from "../components/Price Section/Price"
import FormSection from "../components/Form Section/FormSection"
import Testimonials from "../components/Testimonials/testimonials"
import Download from "../components/Download/Download"
import Gallery from "../components/Gallery/Gallery"
import Featured from "../components/Featured/Featured"
import Footer from "../components/Footer/Footer"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle}>
      <Seo title="From Triathlon to Decision making" />
      <Hero />
      <Price />
      <FormSection />
      <Testimonials />
      <Download />
      <Gallery />
      <Featured />
      <Footer />
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
