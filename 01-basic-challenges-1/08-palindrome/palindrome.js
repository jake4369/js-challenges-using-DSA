// Write a function called `isPalindrome` that takes in a string and returns `true` if the string is a palindrome and `false` if it is not.
import { reverseString } from "./../07-reverse-string/reverse-string";

export const isPalindrome = (str) => {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return normalizedStr === reverseString(normalizedStr);
};
