import { describe, it, expect } from "vitest";
import { titleCase } from "./title-case";

describe("06 - titleCase()", () => {
  it("should return an empty string when input is an empty string", () => {
    // Arrange
    const str = "";
    const expected = "";

    // Act
    const actual = titleCase(str);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return a single word string with the first letter capitalised", () => {
    // Arrange
    const str = "test";
    const expected = "Test";

    // Act
    const actual = titleCase(str);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should capitalise the first letter of each word in a string", () => {
    // Arrange
    const str = "the famous hello world";
    const expected = "The Famous Hello World";

    // Act
    const actual = titleCase(str);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the same string if it is already in title case", () => {
    // Arrange
    const str = "Hello World";
    const expected = "Hello World";

    // Act
    const actual = titleCase(str);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should capitalise the first letter of each word and lowercase the rest", () => {
    // Arrange
    const str = "tHe fAmoUs hELlo WoRlD";
    const expected = "The Famous Hello World";

    // Act
    const actual = titleCase(str);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should ignore special characters and numbers while capitalising words", () => {
    // Arrange
    const str = "hello world! 123";
    const expected = "Hello World! 123";

    // Act
    const actual = titleCase(str);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should handle multiple spaces between words", () => {
    // Arrange
    const str = "hello   world";
    const expected = "Hello   World";

    // Act
    const actual = titleCase(str);

    // Assert
    expect(actual).toBe(expected);
  });
});
