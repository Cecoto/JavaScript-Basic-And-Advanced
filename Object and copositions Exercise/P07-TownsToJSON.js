function solve(arr) {
    let result = [];

    class Town {
        constructor(town, latitude, longitude) {
            this.Town = town;
            this.Latitude = +latitude;
            this.Longitude = +longitude;
        }
    }

    for (let i = 1; i < arr.length; i++) {
        let arrayLine = arr[i]
            .split('|')
            .map(x => x.trim())
            .filter(x => x.length != 0);

        let townName = arrayLine[0];
        let latitude = Number(arrayLine[1]).toFixed(2);
        let longitude = Number(arrayLine[2]).toFixed(2);
        let town = new Town(townName,latitude,longitude);
        result.push(town);
    }
    return JSON.stringify(result);
}


solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);