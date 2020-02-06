function Queue() {
  var collection = [];

  //add a element to a queueu
  this.enqueue = function(element) {
    collection.push(element);
  };

  //remove an element from queue
  this.dequeue = function() {
    collection.shift();
  };
  //print the elements in a queue
  this.print = function() {
    console.log(collection);
  };

  //get the size of queue
  this.size = function() {
    return collection.length;
  };

  //check if the queue is empty
  this.isEmpty = function() {
    return collection.length === 0;
  };

  //get the front of queue
  this.front = function() {
    return collection[0];
  };
}

var q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();
