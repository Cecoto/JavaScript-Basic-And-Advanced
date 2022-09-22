function sumFirstAndLast(input) {
    
    const firstElement = +input.shift();
    const lastElement = +input.pop();

    const sum = firstElement+ lastElement;
    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);