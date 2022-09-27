function solve(input) {

    let obj = {};
    input.forEach(element => {
        let token = element.split(' | ');
        let townName = token[0];
        let productName = token[1];
        let productPrice = +token[2];

        if (!obj[productName]) { //checks if there is a key with that name
            obj[productName] = { townName, productPrice }; //undefined==false; 
        } else {
            if (productPrice < obj[productName].productPrice) {
                obj[productName] = { townName, productPrice };
            }
        }

    });

    Object.keys(obj).forEach(productName => {

        console.log(`${productName} -> ${obj[productName].productPrice} (${obj[productName].townName})`);
    });

}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);