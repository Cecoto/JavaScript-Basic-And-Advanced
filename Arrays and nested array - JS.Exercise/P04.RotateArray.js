function rotation(arrayInput,numberOfRotations) {
    
    for (let index = 1; index <= numberOfRotations; index++) {
      
        //1 2 3 4
        const currentNumber = arrayInput.pop();

        arrayInput.unshift(currentNumber);
    }
    return arrayInput.join(' ');

}
console.log(rotation(['1', 
'2', 
'3', 
'4'], 
2));

console.log(rotation(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15));

