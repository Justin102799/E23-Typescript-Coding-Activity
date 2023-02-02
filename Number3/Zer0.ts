 import assert from "assert";

function endZeros(a: number): number {
    // your code here
    return String(a).split("").filter((zero)=>
    zero === "0").length;

}


console.log(endZeros(1));

// These "asserts" are used for self-checking
assert.strictEqual(endZeros(1), 0);
assert.strictEqual(endZeros(0), 1);
assert.strictEqual(endZeros(10), 1);
assert.strictEqual(endZeros(100), 2);
assert.strictEqual(endZeros(1000), 3);