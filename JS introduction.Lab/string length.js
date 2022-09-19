function calculate (first,second,third){

    let sumOfLengthOfArguments = first.length + second.length + third.length;
    let avarageLengthOfArguments = Math.round(sumOfLengthOfArguments/3);
    console.log(sumOfLengthOfArguments);
    console.log(avarageLengthOfArguments);
} 
calculate('chocolate', 'ice cream', 'cake');
calculate('pasta', '5', '22.3');