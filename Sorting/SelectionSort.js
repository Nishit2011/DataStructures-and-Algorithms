function selectionSort(arr) {
  if (arr.length === 0) return false;

  for (var i = 0; i < arr.length; i++) {
    //selecting minimun value
    var min = i;
    //iterating over the array
    for (var j = i + 1; j < arr.length; j++) {
      //checking if other element in the array is less than min
      if (arr[min] > arr[j]) {
        //if yes, then new minimum value
        min = j;
      }
    }
    //if the minimum value is updated, swap the values
    if (i != min) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}
