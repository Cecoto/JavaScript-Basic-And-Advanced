function radar(speed, area) {
    const residentialLimit = 20;
    const cityLimit = 50;
    const interstateLimit = 90;
    const motorwayLimit = 130;

    let isOverLimit = false;
    let speedDifference;
    let drivingStatus;
    let result;
    if (area == 'city') {  //limit 50km/h



        if (speed > cityLimit) {

            speedDifference = speed - cityLimit;
            if (speedDifference <= 20) {
                drivingStatus = 'speeding';
            }
            else if (speedDifference > 20 && speedDifference <= 40) {
                drivingStatus = 'excessive speeding';
            }
            else {
                drivingStatus = `reckless driving`;
            }
            result = `The speed is ${speedDifference} km/h faster than the allowed speed of ${cityLimit} - ${drivingStatus}`;
        }
        else {
            result = `Driving ${speed} km/h in a ${cityLimit} zone`;
        }

    }
    else if (area == 'residential') { //limit 20km/h


        if (speed > residentialLimit) {

            speedDifference = speed - residentialLimit;
            if (speedDifference <= 20) {
                drivingStatus = 'speeding';
            }
            else if (speedDifference > 20 && speedDifference <= 40) {
                drivingStatus = 'excessive speeding';
            }
            else {
                drivingStatus = `reckless driving`;
            }
            result = `The speed is ${speedDifference} km/h faster than the allowed speed of ${residentialLimit} - ${drivingStatus}`;
        }
        else {
            result = `Driving ${speed} km/h in a ${residentialLimit} zone`;
        }
    }
    else if (area == 'interstate') {//limit 90km/h


        if (speed > interstateLimit) {

            speedDifference = speed - interstateLimit;
            if (speedDifference <= 20) {
                drivingStatus = 'speeding';
            }
            else if (speedDifference > 20 && speedDifference <= 40) {
                drivingStatus = 'excessive speeding';
            }
            else {
                drivingStatus = `reckless driving`;
            }
            result = `The speed is ${speedDifference} km/h faster than the allowed speed of ${interstateLimit} - ${drivingStatus}`;
        }
        else {
            result = `Driving ${speed} km/h in a ${interstateLimit} zone`;
        }

    }
    else { //motorway - limit 130km/h


        if (speed > motorwayLimit) {

            speedDifference = speed - motorwayLimit;
            if (speedDifference <= 20) {
                drivingStatus = 'speeding';
            }
            else if (speedDifference > 20 && speedDifference <= 40) {
                drivingStatus = 'excessive speeding';
            }
            else {
                drivingStatus = `reckless driving`;
            }
            result = `The speed is ${speedDifference} km/h faster than the allowed speed of ${motorwayLimit} - ${drivingStatus}`;
        }
        else {
            result = `Driving ${speed} km/h in a ${motorwayLimit} zone`;
        }
    }
    console.log(result);
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');
