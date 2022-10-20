class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log('hi');
    }

    static comapre(a, b) {
        return a.age - b.age;
    }
}
const person3 = new Person('Ivan', 56);
const person1 = new Person('Peter', 24);
const person2 = new Person('Goshkata', 45);



const people = [person2,person1,person3];

console.log(person1.name);
console.log(person1.age);

person1.sayHello();

person1.age++;
console.log(person1);

console.log(person1 instanceof Person);

people.sort(Person.comapre);

console.log(people.map(x=>x.name));
