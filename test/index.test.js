import {
  summation,
  mean,
  convertToArray,
  capital,
  sumMul,
} from "../src/index.js";

describe("index.js", () => {
  describe("summation", () => {
    it("should return 0", () => {
      expect(summation(0)).toBe(0);
    });

    it("should return 6", () => {
      expect(summation(3)).toBe(6);
    });
  });

  describe("mean", () => {
    it("should return 0", () => {
      const nums = [];
      expect(mean(nums)).toBe(0);
    });

    it("should return 2", () => {
      const nums = [1, 2, 3];
      expect(mean(nums)).toBe(2);
    });
  });

  describe("convertToArray", () => {
    it("should return an empty array", () => {
      const obj = {};
      expect(convertToArray(obj)).toEqual([]);
    });

    it("should return an array of arrays", () => {
      const obj = { name: "Jeremy", age: 24, role: "Software Engineer" };
      expect(convertToArray(obj)).toEqual([
        ["name", "Jeremy"],
        ["age", 24],
        ["role", "Software Engineer"],
      ]);
    });
  });

  describe("capital", () => {
    it("should return an empty array", () => {
      const capitals = [];
      expect(capital(capitals)).toEqual([]);
    });

    it("should return an array of strings", () => {
      const capitals = [
        { state: "Maine", capital: "Augusta" },
        { state: "New York", capital: "Albany" },
      ];
      expect(capital(capitals)).toEqual([
        "The capital of Maine is Augusta",
        "The capital of New York is Albany",
      ]);
    });
  });

  describe("sumMul", () => {
    it("should return 'INVALID'", () => {
      expect(sumMul(4, -7)).toBe("INVALID");
    });

    it("should return 20", () => {
      expect(sumMul(2, 9)).toBe(20);
    });

    it("should return 0", () => {
      expect(sumMul(2, 2)).toBe(0);
    });
  });
});
