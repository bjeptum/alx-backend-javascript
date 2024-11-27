// More complex HTTP server using Node HTTP
const http = require('http');
const fs = require('fs');
const url = require('url');

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url.startsWith('/students')) {
    const queryObject = url.parse(req.url, true).query;
    const dbName = queryObject.db;

    // If the 'db' parameter is missing, return an error
    if (!dbName) {
      res.statusCode = 400;
      res.end('Database name is required');
      return;
    }

    // If the 'db' parameter is present, read the file
    fs.readFile(dbName, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found\n');
        return;
      }

      const lines = data.split('\n');
      let studentList = 'This is the list of our students';
      const students = [];
      const csStudents = [];
      const sweStudents = [];

      // Process each line and extract student details
      lines.forEach((line, index) => {
        if (index === 0 || !line.trim()) {
          return;
        }

        const [firstname, lastname, age, field] = line.split(',');

        if (firstname && lastname && age && field) {
          const student = `${firstname.trim()} ${lastname.trim()}`;
          students.push(student);

          // Add students to their respective fields
          if (field.trim() === 'CS') {
            csStudents.push(student);
          } else if (field.trim() === 'SWE') {
            sweStudents.push(student);
          }

          // Append student details to the list
          studentList += `Name: ${firstname.trim()} ${lastname.trim()}, Age: ${age.trim()}, Field: ${field.trim()}\n`;
        }
      });

      studentList += `\nNumber of students: ${students.length}\n`;
      studentList += `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`;
      studentList += `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}\n`;

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
