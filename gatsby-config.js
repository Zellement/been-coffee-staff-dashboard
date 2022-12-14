require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Been Coffee Staff Dashboard`,
    description: `Staff dashboard for Been Coffee employees.`,
    author: `@zellement`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.DATOCMS,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `been-coffee-dashboard`,
        short_name: `Been Dash`,
        start_url: `/`,
        background_color: `#1B1D3C`,
        theme_color: `#1B1D3C`,
        display: `minimal-ui`,
        icon: `src/images/been-staff-dashboard.png`,
      },
    },
  ],
}
