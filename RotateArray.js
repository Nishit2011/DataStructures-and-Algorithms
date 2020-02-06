function rotateArr(arr, n) {
  var index = arr.indexOf(n);
  var newArr = arr.splice(index);

  return newArr.concat(arr);
}

rotateArr([2, 1, 4, 7, -9, 10, 25], 7);
