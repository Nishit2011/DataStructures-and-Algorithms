//function to choose the pivot
//the idea behind choosing the pivot is that, the lements to the left of array should be less than the pivot
//and elements to the right of pivot should be more than the pivot
function partitionHoare(arr, left, right) {
  const pivot = Math.floor(Math.random() * (right + left - 1) + left);

  //if left is bigger than right, they need to swap
  while (left <= right) {
    //if the element at the left position is smaller than the pivot, its ok, move to next element by incrementing one
    while (arr[left] < arr[pivot]) {
      left++;
    }
    //if the element at the right position is more than the pivot, its ok and move to the next right element
    while (arr[right] > arr[pivot]) {
      right--;
    }

    //if the above cases return false, we need to swap
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  //return the left as this will be our pivot
  return left;
}
function quickSort(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;

  const pivot = partitionHoare(arr, left, right);
  if (left < pivot - 1) {
    quickSort(arr, left, pivot - 1);
  }
  if (right > pivot) {
    quickSort(arr, pivot, right);
  }
  return arr;
}
