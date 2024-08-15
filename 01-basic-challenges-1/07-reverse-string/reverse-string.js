// Write a function called `reverseString` that takes in a string and returns the reverse of that string.

// Solution 1
export const reverseString = (str) => {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
};

// Solution 2
// export const reverseString = (str) => {
//   let reversedStr = "";
//   const letters = [...str];

//   for (let i = 0; i < str.length; i++) {
//     reversedStr += letters.pop();
//   }

//   return reversedStr;
// };

// Solution 3
// export const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };
