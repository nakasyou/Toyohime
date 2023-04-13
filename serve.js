import tor from "./tor/index.js";

tor("https://https://api.ipify.org")
  .then(res=>res.text())
  .then(console.log)