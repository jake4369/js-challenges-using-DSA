import { describe, it, expect } from "vitest";
import { helloWorld } from "./hello-world";

describe("helloWorld()", () => {
  it("should return 'Hello, World!' as a string", () => {
    // Arrange
    const expectedResult = "Hello, World!";
    const expectedType = "string";

    // Act
    const result = helloWorld();

    // Assert
    expect(result).toBe(expectedResult);
    expect(result).toBeTypeOf(expectedType);
  });
});
