module.exports = {
  presets: [["@babel/preset-env", {
    "exclude": ["transform-regenerator"]
  }], "@babel/preset-typescript"],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
}
