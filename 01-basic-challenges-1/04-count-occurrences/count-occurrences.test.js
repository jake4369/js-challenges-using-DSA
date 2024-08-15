import { describe, it, expect, test } from "vitest";
import { countOccurrences } from "./count-occurrences";

describe("countOccurrences", () => {
  it("should return a count as type 'number'", () => {
    // Arrange
    const str = "test";
    const char = "e";

    // Act
    const actual = countOccurrences(str, char);

    // Assert
    expect(actual).toBeTypeOf("number");
  });

  it("should return 0 if passed empty inputs", () => {
    // Arrange
    const str = "";
    const char = "";

    // Act
    const actual = countOccurrences(str, char);
    const expected = 0;

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return 0 if character is not found", () => {
    // Arrange
    const str = "test string";
    const char = "z";

    // Act
    const actual = countOccurrences(str, char);
    const expected = 0;

    // Assert
    expect(actual).toBe(expected);
  });

  test.each([
    { str: "HeLlo WorLd", char: "l", expected: 3 },
    { str: "HeLlo World", char: "L", expected: 3 },
  ])("should be case insensitive", ({ str, char, expected }) => {
    // Act
    const actual = countOccurrences(str, char);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the correct character count", () => {
    expect(countOccurrences("hello world", "l")).toBe(3);
    expect(countOccurrences("programming", "m")).toBe(2);
    expect(countOccurrences("banana", "a")).toBe(3);
  });

  it("should handle special characters that are not letters", () => {
    // Arrange
    const str = "We! love! Villa!";
    const char = "!";

    // Act
    const actual = countOccurrences(str, char);
    const expected = 3;

    // Assert
    expect(actual).toBe(expected);
  });
});
