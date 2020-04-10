module.exports = function (version) {
  console.log(version, "++++");
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            chrome: 59,
            edge: 13,
            firefox: 50,
            safari: 8,
          },
        },
      ],
      [
        "@babel/preset-typescript" /* .ts .tsx*/,
        {
          allExtensions: true,
        },
      ],
    ],
    plugins: ["@babel/plugin-transform-typescript"],
  };
};
