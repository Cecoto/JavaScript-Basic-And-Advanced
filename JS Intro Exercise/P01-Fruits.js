function money(typeFruit,grams,price) {
    
    let gramToKg = grams/1000;

    let totalPrice = gramToKg*price;
 let result = `I need $${totalPrice.toFixed(2)} to buy ${gramToKg.toFixed(2)} kilograms ${typeFruit}.`;

 console.log(result);
}
money('orange', `2500`, `1.80`);
money('apple', 1563, 2.35);