function flattenArray(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      const flatItem = flattenArray(item);

      for (let j = 0; j < flatItem.length; j++) {
        newArray.push(flatItem[j]);
      }
    } else {
      newArray.push(item);
    }
  }
  return newArray;
}
