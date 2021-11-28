const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile("./user.csv")
  .then((jsonObj) => {
    fs.writeFile("user.json", JSON.stringify(jsonObj), "utf-8", () =>
      console.log("completed")
    );
  });
