function towns(list) {
    const result = {};
    for (const town of list) {
        const tokens = town.split(' <->');
        const name = tokens[0];
        const population = +tokens[1];

        if (result[name] == undefined) {

            result[name] = 0;
        }
        result[name] += population;
    }

for (const town in result) {
console.log(`${town} : ${result[town]}`);
}
}

towns(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

towns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);