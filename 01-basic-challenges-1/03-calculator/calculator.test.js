import { describe, it, expect } from "vitest";
import { calculator } from "./calculator";

describe("calculator", () => {
  it("should correctly add two numbers when passed the '+' operator", () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;
    const operator = "+";
    const expected = 5;

    // Act
    const actual = calculator(num1, num2, operator);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the difference of two numbers when passed the '-' operator", () => {
    // Arrange
    const num1 = 5;
    const num2 = 2;
    const operator = "-";
    const expected = 3;

    // Act
    const actual = calculator(num1, num2, operator);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the product of two numbers when passed the '*' operator", () => {
    // Arrange
    const num1 = 5;
    const num2 = 2;
    const operator = "*";
    const expected = 10;

    // Act
    const actual = calculator(num1, num2, operator);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the quotient of two numbers when passed the '/' operator", () => {
    // Arrange
    const num1 = 10;
    const num2 = 2;
    const operator = "/";
    const expected = 5;

    // Act
    const actual = calculator(num1, num2, operator);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return a value of type 'number", () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;
    const operator = "+";
    const expectedType = "number";

    // Act
    const actual = calculator(num1, num2, operator);

    // Assert
    expect(actual).toBeTypeOf(expectedType);
  });

  it("should throw an error if input numbers are not of type 'number'", () => {
    // Arrange
    const num1 = "one";
    const num2 = "two";
    const operator = "+";

    // Act
    const resultFn = () => calculator(num1, num2, operator);

    // Assert
    expect(resultFn).toThrow(/must be a number/);
  });

  it("should throw an error if passed an incorrect operator", () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;
    const operator = "!";

    // Act
    const resultFn = () => calculator(num1, num2, operator);

    // Assert
    expect(resultFn).toThrow(/Invalid operator/);
  });
});
