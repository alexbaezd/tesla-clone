module.exports = {
  siteMetadata: {
    title: `Tesla Landing Page`,
    description: `Simple Tesla Clone`,
    author: `@alexbaezd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tesla-landing-page`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e31937`,
        theme_color: `#e31937`,
        display: `minimal-ui`,
        icon: `src/images/tesla-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
