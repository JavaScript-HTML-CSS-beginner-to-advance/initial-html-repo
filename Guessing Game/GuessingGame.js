// *Challenge
/* 
Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work!" otherwise display a message "Not matched! The correct number was x", where 'x' 
should be the guess number. */

// *Tips

/* Write your code in the solution.js file.
To run run/test your program, simply open/refresh the index.html file in a browser, since solution.js is included as a script in the html file's body.
To prompt the user use prompt('');
To notify the user about the result use alert('');
*/

function getUserNumber() {
  const promptUser = prompt("Insert a random number between 0 and 10.");
  const randomNumber = Math.floor(Math.random() * 11);
  if (parseInt(promptUser) === randomNumber) {
    alert(`bravo ti uceli 4isloto be6e : ${randomNumber}`);
  } else {
    alert(`ti ne uceli bace, 4isloto be6e : ${randomNumber}`);
  }
}
