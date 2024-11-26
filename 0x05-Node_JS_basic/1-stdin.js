// Using Process stdin

const readline = require('readline');

// Read user input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display welcome message and prompt for the user's name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Close readline interface to end program
  rl.close();
});

// Display closing message when program ends
rl.on('close', () => {
  console.log('This important software is now closing');
});
