import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'
import { createSubmitHandler } from "../util.js";


const editTemplate = (currentData, onSubmit) => html`
    <section id="edit-page" class="auth">
        <form @submit=${onSubmit} id="edit">
            <div class="container">
    
                <h1>Edit Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" .value="${currentData.title}">
    
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" .value="${currentData.category}">
    
                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" .value="${currentData.maxLevel}">
    
                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" .value="${currentData.imageUrl}">
    
                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary" .value="${currentData.summary}"></textarea>
                <input class="btn submit" type="submit" value="Edit Game">
    
            </div>
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
        category: data.category,
        maxLevel: data.maxLevel,
        imageUrl: data.imageUrl,
        summary: data.summary
    }
    );
    event.target.reset();
    ctx.page.redirect('/details/' + itemId);
}