// Write a function called `findMaxNumber` that takes in an array of numbers and returns the largest number in the array.

// Solution 1
export const findMaxNumber = (arr) => {
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i]) && arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

// Soultion 2
// export const findMaxNumber = (arr) => {
//   const filteredArr = arr.filter(
//     (num) => typeof num === "number" && !isNaN(num)
//   );

//   return filteredArr.length > 0 ? Math.max(...filteredArr) : -Infinity;
// };
