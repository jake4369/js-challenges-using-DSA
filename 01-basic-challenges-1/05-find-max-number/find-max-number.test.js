import { describe, it, expect, test } from "vitest";
import { findMaxNumber } from "./find-max-number";

describe("findMaxNumber()", () => {
  it("should return a number", () => {
    // Arrange
    const nums = [1, 2, 3];

    // Act
    const actual = findMaxNumber(nums);

    // Assert
    expect(actual).toBeTypeOf("number");
  });

  test.each([
    { arr: [1, 5, 3, 9, 2], expected: 9 },
    { arr: [9, 4, 13, 11, 2], expected: 13 },
  ])("should return the largest number in the array", ({ arr, expected }) => {
    // Act
    const actual = findMaxNumber(arr);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the maximum number when the array contains both positive and negative numbers", () => {
    // Arrange
    const arr = [-1, 3, -5, 7, -10];
    const expected = 7;

    // Act
    const actual = findMaxNumber(arr);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the only number when the array has one element", () => {
    // Arrange
    const arr = [7];
    const expected = 7;

    // Act
    const actual = findMaxNumber(arr);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the same number when all elements are identical", () => {
    // Arrange
    const arr = [4, 4, 4, 4];
    const expected = 4;

    // Act
    const actual = findMaxNumber(arr);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the maximum number when the array contains only negative numbers", () => {
    // Arrange
    const arr = [-10, -5, -3, -20];
    const expected = -3;

    // Act
    const actual = findMaxNumber(arr);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the maximum number when the array contains decimal numbers", () => {
    // Arrange
    const arr = [1.5, 3.2, 2.8, 4.1];
    const expected = 4.1;

    // Act
    const actual = findMaxNumber(arr);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the maximum number when the array contains very large numbers", () => {
    // Arrange
    const arr = [1000000, 999999, 1234567, 987654];
    const expected = 1234567;

    // Act
    const actual = findMaxNumber(arr);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should ignore non-numerical types and return the maximum number in the array", () => {
    // Arrange
    const arr = [1, 5, 3, "a", 9, 2, "11", null, undefined, NaN];
    const expected = 9;

    // Act
    const actual = findMaxNumber(arr);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return -Infinity is array is empty", () => {
    // Arrange
    const arr = [];

    // Act
    const actual = findMaxNumber(arr);
    const expected = -Infinity;

    // Assert
    expect(actual).toBe(expected);
  });
});
