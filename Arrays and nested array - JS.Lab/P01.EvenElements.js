function solve(input) {
    let result = "";

    for (let i = 0; i < input.length; i+=2) {
        const currentElement = input[i];

            result += input[i] + ' ';
           
    }
    console.log(result);
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);