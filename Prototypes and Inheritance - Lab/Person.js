function createPerson(firstName, lastName) {
    const person = {
        firstName,
        lastName,
        fullName: firstName + " " + lastName
    };
    Object.defineProperty(person, 'fullName', {
        get() {
            return this.firstName + " " + this.lastName;

        },
        set(value) {
            const [first, last] = value.split(' ');
            if (first != undefined && last != undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        }
    });
    return person;
}

let person = new createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Anderson";
console.log(person.fullName); //George Anderson

person.fullName = "Nikola Ivanov";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Ivanov
