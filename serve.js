import tor from "./tor";

tor("https://https://api.ipify.org")
  .then(res=>res.text())
  .then(console.log)