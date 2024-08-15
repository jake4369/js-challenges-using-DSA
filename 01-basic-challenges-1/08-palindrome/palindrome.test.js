import { describe, it, expect } from "vitest";
import { isPalindrome } from "./palindrome";

describe("08 - isPalindrome", () => {
  it("should return boolean true or false", () => {
    // Arrange
    const str = "test";

    // Act
    const actual = isPalindrome(str);

    // Assert
    expect(actual).toBeTypeOf("boolean");
  });

  it("should return true if passed an empty string", () => {
    // Arrange
    const str = "";

    // Act
    const actual = isPalindrome(str);
    // Assert

    expect(actual).toBe(true);
  });

  it("should return true if the input string is a single character", () => {
    // Arrange
    const str = "a";

    // Act
    const actual = isPalindrome(str);

    // Assert
    expect(actual).toBe(true);
  });

  it("should return true if string is a palindrome", () => {
    // Arrange
    const str = "racecar";

    // Act
    const actual = isPalindrome(str);
    // Assert

    expect(actual).toBe(true);
  });

  it("should return false if string is not a palindrome", () => {
    // Arrange
    const str = "Hello";

    // Act
    const actual = isPalindrome(str);
    // Assert

    expect(actual).toBe(false);
  });

  it("should return true if the input string is a palindrome despite case differences", () => {
    // Arrange
    const str = "Racecar";

    // Act
    const actual = isPalindrome(str);
    // Assert

    expect(actual).toBe(true);
  });

  it("should return true if the input string of numbers is a palindrome", () => {
    // Arrange
    const str = "12321";

    // Act
    const actual = isPalindrome(str);

    // Assert
    expect(actual).toBe(true);
  });

  it("should return true if the input string contains mixed alphanumeric characters and is a palindrome", () => {
    // Arrange
    const str = "a1b2b1a";

    // Act
    const actual = isPalindrome(str);

    // Assert
    expect(actual).toBe(true);
  });

  it("should return true if words separated by a space is a palindrome", () => {
    // Arrange
    const str = "racecar racecar";

    // Act
    const actual = isPalindrome(str);

    // Assert
    expect(actual).toBe(true);
  });

  it("should return true if the input string is a palindrome ignoring spaces and punctuation", () => {
    // Arrange
    const str = "Madam, in Eden, I'm Adam";

    // Act
    const actual = isPalindrome(str);

    // Assert
    expect(actual).toBe(true);
  });

  it("should return true if the input string contains punctuation and is a palindrome", () => {
    // Arrange
    const str = "A man, a plan, a canal, Panama!";

    // Act
    const actual = isPalindrome(str);

    // Assert
    expect(actual).toBe(true);
  });
});
