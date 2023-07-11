const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.parse(data);
  console.log(jsonData, jsonData.name);
});

const data = { name: 'John', age: 30 };

fs.writeFile('./data.json', JSON.stringify(data), 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Data written to file.');
});
