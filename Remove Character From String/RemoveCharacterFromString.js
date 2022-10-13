// *Challenge 4
// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// console.log(removeCharacter('Example', 0)) => should log xample

let str = "redact - Whales are quite big.";

function Remove(str, position) {
  str = str.slice(1 + 2 + 3, position); //+ str.slice(position + 1, str.slice);
  return str;
}

console.log(Remove("redact - Whales are quite big."));
