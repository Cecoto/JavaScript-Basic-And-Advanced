function createObject(Name, ppl, trs) {

    const obj = {
        name: Name,
        population: ppl,
        treasury: trs
    };



    return obj;
}

console.log(createObject(
    'Tortuga',
    7000,
    15000));

    console.log(createObject(
    'Santo Domingo',
    12000,
    23500));