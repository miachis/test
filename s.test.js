const myModule = require("./s");

describe("String manipulation", () => {
  test("capitalize string", () => {
    expect(myModule.capitalize("solomon")).toBe("Solomon");
  });

  test("reverse string", () => {
    expect(myModule.reverseStr("smada")).toBe("adams");
  });
});
