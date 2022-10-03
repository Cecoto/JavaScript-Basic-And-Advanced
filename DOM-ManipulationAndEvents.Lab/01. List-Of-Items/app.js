function addItem() {
    // select input field and read value of it 

    let inputField = document.getElementById('newItemText').value;

    // create <li> element
    let liElement = document.createElement('li');
    //assign input value to element text content
    liElement.textContent = inputField;

    //select <ul> and append new element
    let ulWhereWeAdd = document.getElementById('items');
    ulWhereWeAdd.appendChild(liElement);

    document.getElementById('newItemText').value = '';

    // clear inputField

}