class List {

    constructor() {
        this.numbers = [];
        this.size = this.numbers.length;
    }

    add(element) {
        this.numbers.push(element);
        this.numbers = this.numbers.sort((a, b) => a - b);
        this.size = this.numbers.length;

    }
    remove(index) {
        if (index >= 0 && index <= this.numbers.length) {
            this.numbers.splice(index, 1);
            this.size = this.numbers.length;
        }
        else {
            throw new Error('Invalid index!');
        }
    }
    get(index) {
        if (index >= 0 && index <= this.numbers.length) {
            return this.numbers[index];
        }
        else {
            throw new Error('Invalid index!');
        }
    }
}