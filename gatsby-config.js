require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Flex`,
    description: `A Gatsby theme with flexible blocks for your Markdown pages.`,
    siteUrl: process.env.SITE_URL,
    logo: `logo.png`,
    copyright: `© YYYY Flex. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `Blocks`,
        path: `/blocks`,
      },
      {
        title: `Docs`,
        path: `/docs`,
      },
      {
        title: `Github`,
        path: `https://github.com/arshad/gatsby-themes/tree/master/themes/gatsby-theme-flex`,
      },
    ],
    footerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `Docs`,
        path: `/docs`,
      },
      {
        title: `Github`,
        path: `https://github.com/arshad/gatsby-themes`,
      },
    ],
  },
  plugins: [`gatsby-theme-flex`],
}
