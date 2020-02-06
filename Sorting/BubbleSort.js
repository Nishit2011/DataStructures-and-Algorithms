function bubbleSort(arr) {
  if (arr.length === 0) return false;
  let swapped;
  do {
    swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// Best:
// The array is already sorted.O(n)

// Average and worst:
// For every item in the array, we have to loop over the entire array.O(n2)

// Worst space:O(n2)
// We have constant variables, swapped, temp and i. However, you might argue that you can’t sort the array, if you don’t have it in memory. In that case, the worst case space complexity would be O(n).
