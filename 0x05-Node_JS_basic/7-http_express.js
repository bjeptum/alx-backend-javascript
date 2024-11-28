const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();

// Helper function to read and parse the CSV file
const parseCSV = (filePath) => new Promise((resolve, reject) => {
  const students = { CS: [], SWE: [] };
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      if (row.firstname && row.lastname && row.age && row.field) {
        if (row.field === 'CS') {
          students.CS.push(`${row.firstname} ${row.lastname}`);
        } else if (row.field === 'SWE') {
          students.SWE.push(`${row.firstname} ${row.lastname}`);
        }
      }
    })
    .on('end', () => {
      resolve(students);
    })
    .on('error', (err) => {
      reject(err);
    });
});

// Endpoint for '/'
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Endpoint for '/students'
app.get('/students', async (req, res) => {
  const filePath = process.argv[2];

  if (!filePath) {
    return res.status(400).send('Database file not provided');
  }

  try {
    const students = await parseCSV(filePath);

    res.status(200).send(`
      This is the list of our students
      Number of students: ${students.CS.length + students.SWE.length}
      Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}
      Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}
    `);
  } catch (err) {
    return res.status(500).send('Could not read database file');
  }
});

module.exports = app;

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
