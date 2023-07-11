import fs from 'fs';
fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.parse(data);
  console.log('Data read from file.', jsonData);
});

const dataArr = [
  { name: 'John', age: 30 },
  { name: 'Doe', age: 40 },
];

fs.writeFile('./data.json', JSON.stringify(dataArr), 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Data written to file.');
});
