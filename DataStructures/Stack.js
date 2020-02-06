function Stack() {
  this.count = 0;
  this.storage = {};

  //adds a value to a stack
  this.push = function(element) {
    this.storage[this.count] = element;
    this.count++;
  };

  //remove element from a stack
  this.pop = function() {
    if (this.count === 0) {
      return "Stack is already empty";
    }
    count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  //get the size of stack
  this.size = function() {
    return this.count;
  };

  //get the top most element of stack
  this.getTop = function() {
    return this.storage[this.count - 1];
  };
}
