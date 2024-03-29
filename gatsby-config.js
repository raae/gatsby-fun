module.exports = {
  siteMetadata: {
    title: "Gatsby Fun",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        prismPreset: "night-owl",
        preset: "@theme-ui/preset-swiss",
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-netlify",
  ],
};
