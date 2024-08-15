import { describe, it, expect } from "vitest";
import { reverseString } from "./reverse-string";

describe("07 - reverseString()", () => {
  it("should return a value of type 'string'", () => {
    // Arrange
    const str = "test";

    // Act
    const actual = reverseString(str);

    // Assert
    expect(actual).toBeTypeOf("string");
  });

  it("should return an empty string when passed an empty string", () => {
    // Arrange
    const str = "";
    const expected = "";

    // Act
    const actual = reverseString(str);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should return the reversed version of the input string", () => {
    expect(reverseString("Hello")).toBe("olleH");
    expect(reverseString("JavaScript")).toBe("tpircSavaJ");
  });

  it("should handle single-character strings", () => {
    expect(reverseString("A")).toBe("A");
    expect(reverseString("z")).toBe("z");
  });

  it("should handle strings with spaces", () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
    expect(reverseString(" Open AI ")).toBe(" IA nepO ");
  });

  it("should handle strings with special characters", () => {
    expect(reverseString("12345!@#")).toBe("#@!54321");
    expect(reverseString("Hello, World!")).toBe("!dlroW ,olleH");
  });

  it("should handle strings with mixed case letters", () => {
    expect(reverseString("AbCDeF")).toBe("FeDCbA");
    expect(reverseString("tEsTiNg")).toBe("gNiTsEt");
  });

  it("should handle strings with numbers", () => {
    expect(reverseString("abc123")).toBe("321cba");
    expect(reverseString("2023 is the year")).toBe("raey eht si 3202");
  });
});
