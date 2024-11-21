let myObj = {
    name: "John",
    sayName: function() {
      console.log(this.name);
    }
}  
console.log(myObj.sayName())