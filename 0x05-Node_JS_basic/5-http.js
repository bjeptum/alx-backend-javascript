// More complex HTTP server using Node HTTP
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url.startsWith('/students')) {
    const urlParts = req.url.split('?');
    const query = new URLSearchParams(urlParts[1]);
    const dbName = query.get('db');

    if (!dbName) {
      res.statusCode = 400;
      res.end('Database name is required');
      return;
    }

    // Read the CSV file
    fs.readFile(dbName, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found\n');
        return;
      }

      const lines = data.split('\n');
      let studentList = 'This is the list of our students';

      // Process each line and extract student details
      lines.forEach((line, index) => {
        if (index === 0 || !line.trim()) {
          return;
        }

        const [firstname, lastname, age, field] = line.split(',');

        // If we have all fields, format and add to the list
        if (firstname && lastname && age && field) {
          studentList += `Name: ${firstname.trim()} ${lastname.trim()}, Age: ${age.trim()}, Field: ${field.trim()}\n`;
        }
      });

      res.end(studentList);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
