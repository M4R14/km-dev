const { NODE_ENV } = process.env

module.exports = {
    pathPrefix: (NODE_ENV == 'production') ? `/politic` : '/',
    siteMetadata: {
      title: `Foam`,
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