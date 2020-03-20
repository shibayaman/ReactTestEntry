module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { 
        modules: false,
        //async/await対応でつまづいたけど時間がないのでひとまず新しいchrome(手元の環境)向けにbabeる。
        //TODO: async/await対応ちゃんと調べる。
        targets: {
          chrome: "79"
        }
      }
    ],
    "@babel/preset-react",
    '@babel/preset-typescript',
  ],
  plugins: [
    ["styled-components", { ssr: false }],
  ],
  env: {
    test: {
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        ["styled-components", { ssr: false }],
      ]
    }
  },
  compact: false
};