function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }
  return a + b;
}
//test cases
console.log(foo(5, 10)); // Output: 15
console.log(foo(null, 10)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo('5', 10)); //Output: NaN
console.log(foo(5, '10')); //Output: NaN