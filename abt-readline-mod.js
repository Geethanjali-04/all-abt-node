// Events and Methods in readline
// r1.on('line', callback): Fired when the user enters a line.
// r1.question(query, callback): Asks a question, waits for user input, and then calls the callback.
// r1.close(): Closes the interface.
// r1.on('close', callback): Fired when the interface is closed.

const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.on('line', (input) => {
  console.log(`Received: ${input}`);
  if (input.toLowerCase() === 'exit') {
    r1.close();
  }
});

r1.on('close', () => {
  console.log('Interface closed. Goodbye!');
  process.exit(0);
});

r1.question("What is your understanding on readLine module",(understanding)=>{
    console.log(`my understanding towards readine module are aas follows ${understanding}`);
});
