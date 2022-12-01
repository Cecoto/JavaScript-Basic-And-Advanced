import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as gameService from '../api/currentData.js' // this service will be change for the current app!!!

const createTemplate = (onSubmit) => html`
        <!-- here we put html of the create form and don't forget to add event listner to the form !!! -->
        <section id="create-meme">
            <form @submit=${onSubmit} id="create-form">
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>
`;

export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)));
}
async function onSubmit(ctx, data, event) {
    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are reqiered!') // validation for all fields  if neccessary !!
    }
    
    let creationMeme = {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl
    }
    await gameService.create(creationMeme);
        // put here all properties of the obj
         event.target.reset();
    ctx.page.redirect('/catalog');
}