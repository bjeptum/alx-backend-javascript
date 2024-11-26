// Read file synchronously

const fs = require('fs');

function countStudents (path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the content into lines and filter out empty lines
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');

    // Skip the header (first line), and process the rest
    const students = lines.slice(1);

    // Create an object to hold the field data
    const fields = {};

    // Loop through each student and categorize them by their field
    students.forEach((line) => {
      const [firstname,lastname,age, field] = line.split(',');

      if (firstname && field) {
        // Add the student to the correct field
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Get the total number of students
    const totalStudents = students.length;

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students and their names by field
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (err) {
    // If an error occurs (e.g., file not found), throw the error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
