function checker(number) {

    let input = String(number);
    let isSame = true;
    let sum = 0;

    let firstDigit = input[0];
for (let index = 0; index < input.length; index++) {
   let currentDigit  = +input[index];
   
   sum+=currentDigit;
    if (firstDigit!=currentDigit) {
        isSame = false;
    }
}
    console.log(isSame);
    console.log(sum)
}

checker(2222222);
checker(1234);

