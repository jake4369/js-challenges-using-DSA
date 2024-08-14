// Write a function called `calculator` that takes in 2 numbers and an operator and returns the result of the calculation.

// Solution 1 - if / else if / else statement
/*
export const calculator = (num1, num2, operator) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Invalid input - must be a number");
  }

  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    throw new Error("Invalid operator");
  }
};
*/

// Solution 2 - switch statement
export const calculator = (num1, num2, operator) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Invalid input - must be a number");
  }

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }

  return result;
};
