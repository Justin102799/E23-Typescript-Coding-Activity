"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function endZeros(a) {
    // your code here
    return String(a).split("").filter((zero) => zero === "0").length;
}
console.log(endZeros(1));
// These "asserts" are used for self-checking
assert_1.default.strictEqual(endZeros(1), 0);
assert_1.default.strictEqual(endZeros(0), 1);
assert_1.default.strictEqual(endZeros(10), 1);
assert_1.default.strictEqual(endZeros(100), 2);
assert_1.default.strictEqual(endZeros(1000), 3);
