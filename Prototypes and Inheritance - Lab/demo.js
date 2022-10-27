function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function () {
    console.log(this.name + ' says hello!');
}


const myPerson = new Person('John', 27);

console.log(myPerson.name);
myPerson.sayHi();