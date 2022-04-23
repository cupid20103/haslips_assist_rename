const fs = require("fs");

var folder = "./img/";

fs.readdir(folder, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    var filePath = folder + file;
    var filePathRename =
      folder + file.substring(0, file.length - 4) + "#25.png";

    fs.rename(filePath, filePathRename, function (err) {
      if (err) console.log("ERROR: " + err);

      console.log(filePathRename + " :File Rename Successfully.");
    });
  }
});
