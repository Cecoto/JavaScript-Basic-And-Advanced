function getInfo() {
    //1.Get all elements by ID
    //2. fetch data from server
    //3.forEach bus create li element with text
    //4.Append li tags  to the ul
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';

    let inputElement = document.getElementById('stopId');
    let stopNamediv = document.getElementById('stopName');
    let allBuses = document.getElementById('buses');

    fetch(`${baseUrl}/${inputElement.value}`)
        .then(response => response.json())
        .then(data => {
            let name = data.name;
            let buses = data.buses;

            stopNamediv.textContent = name;
            allBuses.innerHTML = '';

            Object.keys(buses).forEach(bus => {
                let li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
                allBuses.appendChild(li);
            })
        })
        .catch(error => {
            stopNamediv.textContent = 'Error';
            allBuses.innerHTML = '';
        })
}