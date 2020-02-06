function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

// The array is already sorted.

// Average and worst:
// For every item in the array, we have to loop over the entire array.

// Worst space:
// We have three constant variables, temp, j and i. One could argue that you would have to store the array in memory, which gives O(n)
