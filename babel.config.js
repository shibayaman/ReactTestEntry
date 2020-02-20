module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { modules: false }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    ["styled-components", { ssr: false }]
  ],
  env: {
    test: {
      plugins: [
        "transform-es2015-modules-commonjs",
        [
          "styled-components",
          { ssr: false }
        ]
      ]
    }
  }
};