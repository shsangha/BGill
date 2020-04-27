require("dotenv").config()

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: "https://brandongill.digital",
    pathPrefix: "/",
    title: "Brandon Gill",
    titleAlt: "Brandon Gill",
    description:
      "Shawn Sangha. Front-end developer currently based in Calgary.",
    banner: "/img/logo-card.png",
    headline: "Dev portfolio of Shawn Sangha",
    siteLanguage: "en",
    author: "Shawn Sangha",
    ogLanguage: "en_US",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.tsx`),
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shawn Sangha`,
        short_name: `Shawn Sangha`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/img/logo-card.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.API,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
