import { createIdea } from "../api/data.js";
let section = document.getElementById('createPage');
section.remove();

let form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;
export function showCreate(context) {
    ctx = context;
    context.showSection(section);
}
async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(form);
    let title = formData.get('title',).trim();
    let description = formData.get('description').trim();
    let img = formData.get('imageURL').trim();

    createIdea({title, description, img});
    form.reset();
    ctx.goto('catalog');
}


