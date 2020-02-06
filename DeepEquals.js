// Deep equality is used to check equivalence of objects and arrays.
//Because of the concept of value vs. reference in JavaScript, the equality operators (==, ===) can’t help us.
//They’ll always return false for two different arrays or objects even if they contain the same items.

// If we’re comparing objects or arrays, we need to go into them and check that each item is the same.
//If the item contains other arrays or objects, we need to go into those items as well.

// It’s entirely possible to have objects or arrays nested several levels deep.
//Our function will have to drill all the way down into every object.

// This problem tests several JavaScript concepts:

// Value vs. reference
// Quirks of different data types such as NaN and null
// Use of typeof
// Ability to reuse code
// Ensure that a and b are deeply equivalent.

function deepEquals(a, b) {
  // 1. If both are NaN
  // return true
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  // 2. If they are different types
  // return false
  if (typeof a !== typeof b) {
    return false;
  }
  // 3. If they are not objects or either one is null
  // return an equality comparison
  if (typeof a !== "object" || a === null || b === null) {
    return a === b;
  }
  // 4. Ensure that both objects have the same
  // number of properties. If not
  // return false.
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  // 5. Loop through all keys of the objects. Ensure that
  // the values are identical on both objects. If not
  // return false.
  for (const key in a) {
    // Ensure that the values are identical on both objects. If not
    // return false.
    if (!deepEquals(a[key], b[key])) {
      return false;
    }
  }
  // 6. Return true.
  return true;
}
