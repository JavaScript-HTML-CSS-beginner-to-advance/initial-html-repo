// *Challenge 4
// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// console.log(removeCharacter('Example', 0)) => should log xample

// let str = "redact - Whales are quite big.";

function Remove(str, position) {
  console.log(
    str.substring(0, position - 1) + str.substring(position, str.length)
  );
}

Remove("redact - Whales are quite big.", 2);
