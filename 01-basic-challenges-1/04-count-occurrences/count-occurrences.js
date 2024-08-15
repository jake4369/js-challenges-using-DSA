// Write a function called `countOccurrences()` that takes in a string and a character and returns the number of occurrences of that character in the string.

// Solution 1
/*
export const countOccurrences = (str, char) => {
  // Declare a variable to store the number of occurrences
  let count = 0;

  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    // If the current character is the same as the character we're looking for, increment the count
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }

  // Return the number of occurrences
  return count;
};
*/

// Solution 2
export const countOccurrences = (str, char) => {
  if (!str || !char) return 0;
  return str.toLowerCase().split(char.toLowerCase()).length - 1;
};
