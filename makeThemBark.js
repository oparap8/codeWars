function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}

Dog.prototype.bark = () => 'Woof!'
