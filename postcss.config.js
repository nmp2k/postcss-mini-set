module.exports = {
  plugins: [
    // added first for resolve postcss env feature
    // refer css @import feature
    // out of box it provide sass $variable and condition statement
    require("postcss-advanced-variables"),
    //provide sass nested prefix like & concat
    require("postcss-nested"),
    //for using native level 4 feature like @container @layer, but
    // want use custom polyfill feature
    require("postcss-preset-env")({
      stage: 4,
      features: {
        "custom-media-queries": true,
        "custom-properties": true,
        "custom-selectors": true,
      },
    }),
  ],
  //postcss-assets
  //cssnano
  //two before feature ise important but in scope
  //of this example i haven't add those
  // important things postcss resolve step by step plugin
  // order of plugin is direct impact result
};
