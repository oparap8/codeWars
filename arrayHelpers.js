Array.prototype.square = function() {
    return this.map(x => x * x);
  };
  console.log([1, 2, 3, 4, 5].square());
  
  Array.prototype.cube = function() {
    return this.map(x => x * x * x);
  };
  console.log([1, 2, 3, 4, 5].cube());
  
  Array.prototype.average = function() {
    if (this.length === 0) return NaN
    return this.reduce((a, b) => a + b) / this.length;
  };
  console.log([1, 2, 3, 4, 5].average())
  
  Array.prototype.sum = function() {
    if (this.length === 0) return NaN
    return this.reduce((a, b) => a + b);
  };
  console.log([1, 2, 3, 4, 5].sum())
  
  Array.prototype.even = function() {
    return this.filter(x => x % 2 === 0);
  };
  console.log([1, 2, 3, 4, 5].even());
  
  Array.prototype.odd = function() {  
    return this.filter(x => x % 2 !== 0);
  };
  console.log([1, 2, 3, 4, 5].odd());