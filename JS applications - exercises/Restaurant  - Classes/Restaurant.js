class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(productsInfo) {

        for (const product of productsInfo) {

            let productName = product.split(' ')[0];
            let productQuantity = Number(product.split(' ')[1]);
            let productTotalPrice = Number(product.split(' ')[2]);

            if (this.budgetMoney >= productTotalPrice) {
                if (!this.stockProducts.hasOwnProperty(productName)) {

                    this.stockProducts[`${productName}`] = 0;


                }
                this.budgetMoney -= productTotalPrice;
                this.stockProducts[`${productName}`] += productQuantity;

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                continue;
            }
            this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);

        }

        return this.history.join('\n');
    }
    addToMenu(meal, neededProdcuts, price) {

        let productName = neededProdcuts.split(' ')[0];
        let productQuantity = neededProdcuts.split(' ')[1];

        if (!this.menu.hasOwnProperty(meal)) {

            this.menu['meal'] = {
                prodcuts: neededProdcuts,
                productPrice: price
            };

            if (Object.keys(this.menu).length == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }
        return `The ${meal} is already in the our menu, try something different.`;


    }
    showTheMenu() {
        let result = [];
        for (const meal in this.menu) {
            result.push(`${this.meal.productName}`);
        }
    }

}
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
