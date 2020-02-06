function PriorityQueue() {
  var collection = [];

  //print the priority queue
  this.print = function() {
    return collection;
  };

  //add element to queue based on priority
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
    }
    if (!added) {
      collection.push(element);
    }
  };

  //remove element from priority queue
  this.dequeue = function() {
    collection.shift();
  };

  //get the size of priority queue
  this.size = function() {
    return collection.length;
  };

  //get the front of priority queue
  this.front = function() {
    return collection[0];
  };
}
var pq = new PriorityQueue();
pq.enqueue(["Nishit Ranjan", 2]);
pq.enqueue(["Nimish Ranjan", 3]);
pq.enqueue(["Pooja Ranjan", 1]);
pq.enqueue(["Meera Sinha", 2]);
pq.enqueue(["Ranjan Sinha", 4]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
