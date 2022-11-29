import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'
import { createSubmitHandler } from "../util.js";


const editTemplate = (currentData, onSubmit) => html`
    <section id="edit-page" class="auth">
        <form @submit=${onSubmit} id="edit">
            <h1 class="title">Edit Post</h1>
    
            <article class="input-group">
                <label for="title">Post Title</label>
                <input type="title" name="title" id="title" .value="${currentData.title}">
            </article>
    
            <article class="input-group">
                <label for="description">Description of the needs </label>
                <input type="text" name="description" id="description" .value="${currentData.description}">
            </article>
    
            <article class="input-group">
                <label for="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl" .value="${currentData.imageUrl}">
            </article>
    
            <article class="input-group">
                <label for="address">Address of the orphanage</label>
                <input type="text" name="address" id="address" .value="${currentData.address}">
            </article>
    
            <article class="input-group">
                <label for="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone" .value="${currentData.phone}">
            </article>
    
            <input type="submit" class="btn submit" value="Edit Post">
        </form>
    </section>
`;

export async function editPage(ctx) {
    const itemId = ctx.params.id;
    const item = await dataService.getById(itemId);
    ctx.render(editTemplate(item, createSubmitHandler(ctx, onSubmit)));
}
async function onSubmit(ctx, data, event) {
    const itemId = ctx.params.id;

    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are reqiered!') // check all the fields are filled
    }
    await dataService.update(itemId, {
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        address: data.address,
        phone: data.phone
    }
    );
    event.target.reset();
    ctx.page.redirect('/details/' + itemId);
}