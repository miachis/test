const myModule = require("./s");

describe("String manipulation", () => {
  test("capitalize string", () => {
    expect(myModule.capitalize("solomon")).toBe("Solomon");
  });

  test("reverse string", () => {
    expect(myModule.reverseStr("smada")).toBe("adams");
  });
});

describe("Calculation", () => {
  test("add two numbers", () => {
    expect(myModule.calculator.add(5, 2)).toBe(7);
  });
  test("subtract two numbers", () => {
    expect(myModule.calculator.subtract(5, 2)).toBe(3);
  });
  test("divide two numbers", () => {
    expect(myModule.calculator.divide(5, 2)).toBe(2.5);
  });
  test("multiply two numbers", () => {
    expect(myModule.calculator.multiply(5, 2)).toBe(10);
  });
});
