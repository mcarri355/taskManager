const fs = require('fs');
const path = require('path');
fs.writeFileSync(
  path.join(__dirname, '/name.txt'),
  'This is the new test file today',
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
  }
);

fs.appendFileSync(
  path.join(__dirname, 'name.txt'),
  'My Name is Matthew',
  function (err) {
    if (err) {
      console.log(err);
      return;
    }
  }
);

fs.unlinkSync(path.join(__dirname, 'name.txt'), function (err) {
  if (err) {
    console.log(err);
    return;
  }
});

fs.mkdirSync('Carrillo', function (err) {
  if (err) {
    console.log(err);
    return;
  }
});
