var process = require('child_process');
var fs = require('fs');
process.exec('node ./readAllSideBar.js', function (err, out, stderr) {
  fs.writeFile('./_sidebar1.md', out, function (err) {
    console.log(err ? '错误' : '正确');
  });
});
