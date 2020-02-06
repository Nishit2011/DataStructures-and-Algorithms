function findSmallest(arr1, arr2, arr3) {
  var min = arr1[0];
  if (arr2[0] < arr1[0] && arr2[0] < arr3[0]) {
    return arr2[0];
  } else if (arr3[0] < arr1[0] && arr3[0] < arr2[0]) {
    return arr3[0];
  } else {
    return arr1[0];
  }
}

findSmallest([904, 7777, 1000], [10, 23, 44, 65], [100, 110, 111]);
