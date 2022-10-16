function solution(params) {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    const stock = {
        protein: 0,
        carbohydrate: 0,
        far: 0,
        flavour: 0
    };


    const commands = {
        restock,
        prepare,
        report
    };
    return manager;

    function manager(line) {
        const [command, param, qty] = line.split(' ');
        const fn =  commands[command];
        return fn(param, qty);
    }

    function restock(type, qty) {
        stock[type] += Number(qty);
        return 'Success';
    }

    function prepare(recipeAsString, qty) {

        qty = Number(qty);
        //find recipe and calculte total ingredient qty
        const recipe = Object.entries(recipes[recipeAsString]);

        recipe.forEach(ingredient => ingredient[1] *= qty);

        for (let [ingredient,requiered] of recipe) {
            if (stock[ingredient]<requiered) {
            return`Error: not enough ${ingredient} in stock`;
            }
        }

        recipe.forEach(([ingredient,requiered]) => stock[ingredient]-=requiered);
        return 'Success';
        //then comapre one by one with stock if one is insufficient => return error
        //else ,subtract qty from stock and return success
    }
    function report() {

        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4"));