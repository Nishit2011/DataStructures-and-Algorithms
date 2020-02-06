function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  //calculating the mid point of the array
  const middle = Math.floor(arr.length / 2);

  //slicing the left half of the array
  const left = arr.slice(0, middle);
  //slicing the right half of the array
  const right = arr.slice(middle);

  //passing the left and right array to merge function
  return mergeSort(merge(left), merge(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Best, average and worst:
// Each partitioning takes O(n) operations, and every partitioning splits the array O(log(n)). This results in O(n log(n)).

// Worst space:
// We save three variables for each element in the array.
