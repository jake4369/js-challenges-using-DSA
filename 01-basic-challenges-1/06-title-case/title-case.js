// Write a function called `titleCase` that takes in a string and returns the string with the first letter of each word capitalized.

// Solution 1
export const titleCase = (str) => {
  if (!str) return "";

  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  return words.join(" ");
};

// Solution 2
// export const titleCase = (str) => {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => {
//       return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "";
//     })
//     .join(" ");
// };
