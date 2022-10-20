function solve(ticketInfo, typeSort) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let listOfTickets = [];
    for (const line of ticketInfo) {
        let [destination, price, status] = line.split('|');
        price = Number(price);

        listOfTickets.push(new Ticket(destination, price, status));
    }
    if (typeSort == 'destination') {
        listOfTickets.sort((a, b) => a.destination.localeCompare(b.destination));
    }
    else if (typeSort == 'price') {
        listOfTickets.sort((a, b) => a - b);
    }
    else {
        listOfTickets.sort((a, b) => a.status.localeCompare(b.status));

    }

    return listOfTickets;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));