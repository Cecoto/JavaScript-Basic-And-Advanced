class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }


    addCar(model, horsepower, price, mileage) {

        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        let car = {
            model: model,
            horsepower: horsepower,
            price: price,
            mileage: mileage

        }

        this.availableCars.push(car);
        return `New car added: ${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`;

    }
    sellCar(model, desiredMileage) {

        let car = this.availableCars.find(x => x.model == model);
        if (car == undefined) {
            throw new Error(`${model} was not found!`);
        }
        if (car.mileage > desiredMileage) {
            let difference = car.mileage - desiredMileage;
            if (difference <= 40000) {
                car.price -= car.price * 0.05;
            }
            else {
                car.price -= car.price * 0.10;

            }
        }
        this.availableCars.splice(car, 1);

        let soldCar = {
            model: car.model,
            horsepower: car.horsepower,
            soldPrice: car.price
        };
        this.soldCars.push(soldCar);

        this.totalIncome += soldCar.soldPrice;
        return `${soldCar.model} was sold for ${soldCar.soldPrice.toFixed(2)}$`;
    }
    currentCar() {
        let returnArray = ['-Available cars:'];

        if (this.availableCars.length == 0) {
            return "There are no available cars";
        }
        for (const car of this.availableCars) {
            returnArray.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        }
        return returnArray.join('\n');
    }
    salesReport(criteria) {
        let result = [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`
        ];
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error("Invalid criteria!");
        }
        let sortedCars;
        if (criteria == 'horsepower') {
            sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }
        else {
            sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        for (const car of sortedCars) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        }
  return result.join('\n');
    }

}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



