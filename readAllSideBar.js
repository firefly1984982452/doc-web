const fs = require('fs');
const path = require('path');
const readDir = (entry) => {
  const dirInfo = fs.readdirSync(entry);
  let navArr = [];
  dirInfo.forEach((item) => {
    const location = path.join(entry, item);
    const info = fs.statSync(location);
    if (info.isDirectory()) {
      readDir(location);
    } else {
      if (item == '_sidebar.md') {
        fs.readFile(location, 'utf-8', function (error, data) {
          if (error) {
            console.log('error');
          } else {
            console.log(data);
            navArr.push(data);
          }
        });
      }
    }
  });
  return navArr;
};
readDir('./docs');
