// Dependencies
const mathLibrary = require('./library/math');
const quotesLibrary = require('./library/quotes');


// App object - module scaffolding
const app = {};

// Configuration
app.config = {
  timeBetweenQuotes: 3000,
};

// Function to print all the quotes
app.printQuotes = function printQuotes() {
  // Get all the quotes
  const allQuotes = quotesLibrary.allQuotes();

  // Get the length of the array of quotes
  const numberOfQuotes = allQuotes.length;

  // Pick a number between 1 and the array of quotes
  const randomNumber = mathLibrary.getRndomNumber(1, numberOfQuotes);

  // Get the selected quote from the array
  let selectedQuote = allQuotes[randomNumber - 1];

  console.log(selectedQuote);
};

// Function to call the program infinitely
app.infinitelyLoop = function infinitelyLoop() {
  // Create the interval by calling printQuotes at the specified time interval
  setInterval(app.printQuotes, app.config.timeBetweenQuotes);
};

app.infinitelyLoop();
