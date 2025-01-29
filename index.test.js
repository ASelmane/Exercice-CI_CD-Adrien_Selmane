import { describe, it, expect } from "vitest";
import { sum } from "./index";

describe("sum", () => {
  it("should fail when adding two numbers incorrectly", () => {
    expect(sum(1, 2)).not.toBe(4); // This test will pass
  });

  it("should add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
