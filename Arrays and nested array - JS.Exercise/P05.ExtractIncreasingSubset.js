function extract(input) {

    let result = [];
    let currentBiggestNumber = -Infinity;
    for (let i = 0; i < input.length; i++) {

        if (input[i] >= currentBiggestNumber) {
            currentBiggestNumber = input[i];

            result.push(currentBiggestNumber);
        }

    }
    result = result.sort((a,b)=>a-b);
    return result;
}

console.log(extract([20, 
    3, 
    2, 
    15,
    6, 
    1]));