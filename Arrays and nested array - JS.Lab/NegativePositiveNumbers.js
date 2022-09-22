function arrayModify(input) {
    
    const outputArray = [];
    input.forEach(number => {
        if (number<0) {
            outputArray.unshift(number);
        }
        else {
            outputArray.push(number);
        }

    });
    
     outputArray.forEach(element => {
        console.log(element)
     });
}

arrayModify([7, -2, 8, 9]);

arrayModify([3, -2, 0, -1]);