function solve(arr) {
    let juices = {};
    let bottles = {};
    function createBottle(flavor) {

        if (juices[flavor] >= 1000) {
            if (!bottles.hasOwnProperty[flavor]) {
                bottles[flavor] = 0;
            }
            let numberOfBottles = Math.floor(juices[flavor] / 1000);
            bottles[flavor] += numberOfBottles;
            juices[flavor] -= (numberOfBottles * 1000);
        }
    }
    for (const line of arr) {
        let [juiceName, qty] = line.split(' => ');
        
        if (!juices.hasOwnProperty(juiceName)) {
            juices[juiceName] = 0;
        }

        juices[juiceName] += Number(qty);

        createBottle(juiceName);
    }
    for (let flavour in bottles) {
        console.log(`${flavour} => ${bottles[flavour]}`);
    }

}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);