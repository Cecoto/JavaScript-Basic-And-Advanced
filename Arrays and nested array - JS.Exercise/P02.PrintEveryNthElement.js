function print(arrayInput, step) {
    let result = [];
    for (let i = 0; i < arrayInput.length; i += step) {

        result.push(arrayInput[i]);
    }
   return result
}
console.log(print(['5',
'20',
'31',
'4',
'20'],
2));
