import { html, render, } from "../node_modules/lit-html/lit-html.js";

let url = "http://localhost:3030/jsonstore/advanced/dropdown";

async function getAllItems() {

    const response = await fetch(url);
    let data = await response.json();
    return data;
}

let items = Object.values(await getAllItems());
let cardTemplate = html`${items.map(item => html`<option value=${item._id}>${item.text}</option>`)}`
let menu = document.getElementById('menu');
render(cardTemplate, menu);

document.querySelector('input[type="submit"]').addEventListener('click', addItem);
function addItem(event) {


    let text = document.getElementById('itemText').value;
    let response = fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
    });
    if (response.ok) {
        let cardTemp = html`<option value=${text._id}>${text.text}</option>`;
    }
}