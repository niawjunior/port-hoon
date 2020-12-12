const CracoLessPlugin = require("craco-less");
const darkTheme = require("@ant-design/dark-theme");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: darkTheme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
