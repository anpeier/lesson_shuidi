let fs = require("fs");
let join = require("path").join;

function findSync(startPath) {
  let result = [];
  function finder(path) {
    let files = fs.readdirSync(path);
    files.forEach((val, index) => {
      let fPath = join(path, val);
      let stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath);
      if (stats.isFile()) result.push(fPath);
    });
  }
  finder(join(process.cwd(), startPath));
  return result;
}

exports.findSync = findSync;
