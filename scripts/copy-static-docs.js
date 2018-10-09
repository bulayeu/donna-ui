const ncp = require("../node_modules/ncp").ncp;

ncp("./stories/static", "./docs", function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("done!");
});
