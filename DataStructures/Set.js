function mySet() {
  var collection = [];

  //values in the set
  this.values = function() {
    return collection;
  };

  //checking if element is already present in the Set
  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };

  //adding element to the set
  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    } else {
      return false;
    }
  };

  //removing element from Set
  this.remove = function(element) {
    if (!this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

  //union of two sets
  this.unionSet = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var otherSet = otherSet.values();

    //adding elements of firstSet to the union set
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });

    //adding elements of the other set to the union set
    otherSet.forEach(function(e) {
      unionSet.add(e);
    });

    return unionSet;
  };

  //intersection of two sets
  this.intersection = function(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    var otherSet = otherSet.values();

    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  //difference of two sets
  this.difference = function(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    var otherSet = otherSet.values();

    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  //subset
  this.subset = function(otherSet) {
    var subset = new mySet();
    var firstSet = this.values();
    var otherSet = otherSet.values();
    firstSet.forEach(function(e) {
      otherSet.forEach(function(o) {
        if (e !== o) return false;
      });
    });
    return true;
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
