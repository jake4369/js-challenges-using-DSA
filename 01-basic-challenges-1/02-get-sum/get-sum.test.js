import { describe, it, expect } from "vitest";
import { getSum } from "./get-sum";

describe("getSum()", () => {
  it("should return the sum of two numbers", () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;
    const expectedResult = 5;

    // Act
    const result = getSum(num1, num2);

    expect(result).toBe(expectedResult);
  });

  it("should return a value of type 'number'", () => {
    // Arrange
    const num1 = 2;
    const num2 = 3;
    const expectedType = "number";

    // Act
    const result = getSum(num1, num2);

    expect(result).toBeTypeOf(expectedType);
  });

  it("should throw error with message if arguments are not of type 'number'", () => {
    // Arrange
    const input1 = "one";
    const input2 = [];

    // Act
    const resultFn = () => getSum(input1, input2);

    // Assert
    expect(resultFn).toThrow(/inputs must be number/);
  });
});
