import { sum } from "./index";
import { capitalize } from "./index";
import { reverseString } from "./index";
import { calculator } from "./index";
import { caesarCipher } from "./index";
import { analyzeArray } from "./index";
test("input word get it capitalized", () => {
  expect(capitalize("test")).toMatch(/^[A-Z]/);
});
test("input word get it capitalized", () => {
  expect(reverseString("aest")).toMatch("tsea");
});
test("calculator add method", () => {
  expect(calculator.add(2, 2)).toBe(4);
});
test("calculator subtract method", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});
test("calculator divide method", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
test("calculator multiply method", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
test("caeser function", () => {
  expect(caesarCipher("a,B c D/ z/")).toMatch("b,C d E/ a/");
});
test("get obj", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
