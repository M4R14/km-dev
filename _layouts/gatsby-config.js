const { NODE_ENV } = process.env

module.exports = {
    pathPrefix: (NODE_ENV == 'production') ? `/km-dev` : '/',
    siteMetadata: {
      title: `KM-DEV`,
    },
    plugins: [
      {
        resolve: `gatsby-theme-garden`,
        options: {
          rootNote: "/readme",
          contentPath: `${__dirname}/../docs`,
          ignore: [
            "**/_layouts/**",
            "**/.git/**",
            "**/.github/**",
            "**/.vscode/**",
          ],
        },
      },
    ],
  };