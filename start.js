require("babel-register")({
  presets: ["env", "@babel/preset-env"]
});
module.exports = require("./server.js");
