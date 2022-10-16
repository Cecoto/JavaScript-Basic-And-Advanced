function solve(areaIn,volIn,input) {

    let parsedInput = JSON.parse(input);
     
    const result = [];
    for (let cube of parsedInput) {
        const current = {
            area: areaIn.call(cube),
            volume: volIn.call(cube)
        };

        result.push(current);
    }

    return result;
}



function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

