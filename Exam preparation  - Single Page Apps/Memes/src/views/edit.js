import { html } from "../../node_modules/lit-html/lit-html.js";
import * as gameService from '../api/currentData.js' // this service will be change for the current app!!!
import { createSubmitHandler } from "../util.js";


const editTemplate = (meme, onSubmit) => html`
    <!-- here we add the html for the edit html which may be will be same with the create html and add eventListener to the form  -->
    <section id="edit-meme">
        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description">
                               ${meme.description}
                                </textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
`;

export async function editPage(ctx) {
    const memeId = ctx.params.id;
    const meme = await gameService.getById(memeId);
    ctx.render(editTemplate(meme, createSubmitHandler(ctx, onSubmit)));
}
async function onSubmit(ctx, data, event) {
    const memeId = ctx.params.id;

    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are reqiered!') // check all the fields are filled
    }
    await gameService.update(memeId, {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl
    }
    );
    event.target.reset();
    ctx.page.redirect('/details/' + memeId);
}