module.exports = {
  siteMetadata: {
    title: `KGG — The Fraternity for Gamers`,
    description: `Kappa Gamma Gamma (KGG) is a coed college community that plays games together sometimes, but also hangout without playing games sometimes too.`,
    author: `@zhengkyl`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component:require.resolve(`./src/components/layout`)
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KGG`,
        short_name: `KGG`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/kgg-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
