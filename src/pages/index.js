import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"

import { graphql } from "gatsby"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />
      <Hero />
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
