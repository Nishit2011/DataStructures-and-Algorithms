function allAnagrams(arr) {
  let sortedArr = arr.map(a =>
    sortedArr
      .split("")
      .sort()
      .join("")
  );
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[0]) return false;
  }
  return true;
}
