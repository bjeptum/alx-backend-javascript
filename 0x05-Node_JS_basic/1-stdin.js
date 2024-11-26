// Using Process stdin

const readline = require('readline');

// Read user input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.stdin.isTTY) {
  console.log('Welcome to Holberton School, what is your name?');
  rl.question('', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });
} else {
  process.stdin.once('data', (input) => {
    const name = input.toString().trim();
    console.log('Welcome to Holberton School, what is your name?');
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
  });
}
