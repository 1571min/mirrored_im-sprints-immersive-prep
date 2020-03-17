const { add, substract, multiply, divide } = require("../math");
// 1. Create test case to check add function works what it is supposed to be.
test("2 + 3 = 5",function () {
  expect(add(2,3)).toEqual(5);
});
// 2. Create test case to check substract function works what it is supposed to be.
test("2 - 3 = -1",function () {
  expect(substract(2,3)).toBe(-1);
});
// 3. Create test case to check multiply function works what it is supposed to be.
test("2 * 3 = 6",function () {
  expect(multiply(2,3)).toBe(2*3);
});
// 4. Create test case to check divide function works what it is supposed to be.
test("6 / 3 = 2",function () {
  expect(divide(6,3)).toBe(2);
});
// 5. Create test case to check divide function reutns "cannot divide something with 0"
// when it tries to divdie a number with zero.
test("cannot divide something with 0",function () {
  expect(divide(6,0)).toBe(Infinity);
});
// 6. Group tests using `describe()`
describe("math",function () {
  test("2 + 3 = 5",function () {
    expect(add(2,3)).toEqual(5);
  });
  // 2. Create test case to check substract function works what it is supposed to be.
  test("2 - 3 = -1",function () {
    expect(substract(2,3)).toBe(-1);
  });
  // 3. Create test case to check multiply function works what it is supposed to be.
  test("2 * 3 = 6",function () {
    expect(multiply(2,3)).toBe(2*3);
  });
  // 4. Create test case to check divide function works what it is supposed to be.
  test("6 / 3 = 2",function () {
    expect(divide(6,3)).toBe(2);
  });
  // 5. Create test case to check divide function reutns "cannot divide something with 0"
  // when it tries to divdie a number with zero.
  test("cannot divide something with 0",function () {
    expect(divide(6,0)).toBe(Infinity);
  });
}
)