const {add, subtract, multiply, divide, copyArray} = require ("./node2");

let array = ["1", "2", "3"];

test("Two numbers correctly add together", () => {
    expect(add(1, 2)).toBe(3)
});

test("Two numbers correctly subtract together", () => {
    expect(subtract(3, 2)).toBe(1)
});

test("Two numbers correctly multiply together", () => {
    expect(multiply(10, 2)).toBe(20)
});

test("Two numbers correctly divide together", () => {
    expect(divide(10, 2)).toBe(5)
});

test("return is a copy", () => {
    expect(copyArray(array)).not.toBe(array)
});