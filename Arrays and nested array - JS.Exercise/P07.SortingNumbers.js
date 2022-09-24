function sorting(numbers) {

    const result = [];
    numbers.sort((a, b) => b - a);


    while (numbers.length !== 0) {
        result.push(numbers.pop());
        result.push(numbers.shift());
    }

   return result;

}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);