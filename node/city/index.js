const axios = require("axios");
const fs = require("fs");

axios({
  method: "get",
  url:
    "https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json",
  responseType: "stream"
}).then(function(response) {
  response.data.pipe(fs.createWriteStream("cities.json"));
});
