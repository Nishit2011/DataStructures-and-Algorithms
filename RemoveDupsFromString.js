function removeDups(str) {
  var arr = str.split("");
  var set = new Set(arr);

  return Array.from(set).join("");
}

removeDups("mmaass");
