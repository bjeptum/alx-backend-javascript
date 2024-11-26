const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Attempt to read the file asynchronously
    const data = await fs.readFile(path, 'utf-8');

    // Split the CSV data into rows
    const lines = data.split('\n');

    // Remove the first line (header)
    const studentsData = lines.slice(1);

    // Filter out any empty lines
    const students = studentsData.filter((line) => line.trim() !== '');

    // Create a map to group students by field
    const fields = {};

    // Iterate over the students and group by field
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Count total number of students
    const totalStudents = students.length;

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // If the file cannot be read, throw the error with the specific message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
