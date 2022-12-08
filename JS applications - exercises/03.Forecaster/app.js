function attachEvents() {
    //1.Get all elements
    //2.define weather symbols
    //3.define current and upcomming divs
    //4.getButton => add evenetListener
    //5.fetch location data from server => name,code
    //6. code=>fetch forecast for today
    //7.update html with forecast day
    //8.fetch upcoming forecast
    //9. update html based on data

    let inputElement = document.getElementById('location');
    let getButton = document.getElementById('submit');
    let divDisplay = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let baseUrl = 'http://localhost:3030/jsonstore/forecaster/locations';

    let sunny = '&#x2600';
    let partlySunny = '&#x26C5';
    let overcast = '&#x2601';
    let rain = '&#x2614';
    let degrees = '&#176';

    let code = '';

    let divElementUpcoming = document.createElement('div');
    let divElementCurrent = document.createElement('div');

    getButton.addEventListener('click', (e) => {
        divElementUpcoming.innerHTML = '';
        divElementCurrent.innerHTML = '';

        divElementUpcoming.setAttribute('class', 'forecast-info');
        divElementCurrent.setAttribute('class', 'forecasts');

        divDisplay.style.display = 'inline';

        fetch(`${baseUrl}/locations`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data.array.forEach(locationInfoObject => {
                    if (locationInfoObject.name == inputElement.value) {
                        return code = locationInfoObject.code;
                    }
                });

                fetch(`${baseUrl}/today/${code}`)
                    .then(response => response.json())
                then(data => {
                    let spanGroup = document.createElement('span');
                    let conditionSpan = document.createElement('span');
                    let temperatureSpan = document.createElement('span');
                    let locationSpan = document.createElement('span');
                    let spanWithIcon = document.createElement('span');
                    locationSpan.textContent = data.name;
                    temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
                    conditionSpan.textContent = data.forecast.condition;

                    let condition = data.forecast.condition;
                    if (condition = 'Sunny') {
                        spanWithIcon.innerHTML = sunny;
                    }
                    else if (condition == 'Partly sunny') {
                        spanWithIcon.innerHTML = partlySunny;

                    }
                    else if (condition == 'overcast') {
                        spanWithIcon.innerHTML = overcast;

                    } else if (condition == 'Rain') {
                        spanWithIcon.innerHTML = rain;
                    }
                    spanGroup.appendChild(locationSpan);
                    spanGroup.appendChild(temperatureSpan);
                    spanGroup.appendChild(conditionSpan);
                    divElementCurrent.appendChild(spanWithIcon);
                    divElementCurrent.appendChild(spanGroup);
                    currentDiv.appendChild(divElementCurrent);
                })
            })
            .catch(error => error.message);
    });

}

attachEvents();