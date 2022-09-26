function cityTaxes(Name, ppl, trs) {

    const result = {
        name: Name,
        population: ppl,
        treasury: trs,
        taxRate : 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population*this.taxRate);
        },
        applyGrowth(percent){
            this.population+=this.population*(percent/100);
        },
        applyRecession(percent) {
            this.treasury-=this.treasury*(percent/100);
        }
    };
    

 


    return result;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);