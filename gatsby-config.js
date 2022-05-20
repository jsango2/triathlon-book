const { languages, defaultLanguage } = require("./languages")
module.exports = {
  siteMetadata: {
    title: `From Triathlon to Decision making`,
    image: `/ogimage.png`,
    author: {
      name: `Sutra.hr`,
      summary: `From Triathlon to Decision making`,
    },
    description: `Over a long and fruitful business career, Roberto has explored the
    practices of triathlon training and how they positively impact the
    business processes. Not taking anything for granted, he conceptualized a method that will lead you through simple steps in order to improve your sales and your overall life standard.`,
    siteUrl: `https://localhost:8003/`,
    social: {
      twitter: `Triathlon book`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato\:400`,
          `Roboto\:400, 500,600, 700`,
          `IBM Plex Sans\:500`,
          `Work Sans\:400`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `From triathlon to decision making`,
        short_name: `From triathlon to decision making`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
