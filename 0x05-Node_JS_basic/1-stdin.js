// app that display a welcome message to the user
console.log("Welcome to Holberton School, what is your name?");
process.stdin.on("data", (data) => {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
});
