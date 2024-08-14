// Write a function called `getSum` that takes in two numbers and returns the sum of those two numbers.

export const getSum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input - inputs must be numbers");
  }

  return a + b;
};
