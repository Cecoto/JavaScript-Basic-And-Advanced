
const person = {
name:'Peter',
age:23
};


const{name} = person; //деструкториране на обекта като правим копие на property.

console.log(name);
delete person.age;
console.log(person);


