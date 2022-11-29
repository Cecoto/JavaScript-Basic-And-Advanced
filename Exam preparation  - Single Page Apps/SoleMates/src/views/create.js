import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";
import * as dataService from '../api/currentData.js';
const createTemplate = (onSubmit) => html`
        <section id="create">
            <div class="form">
                <h2>Add item</h2>
                <form @submit=${onSubmit} class="create-form">
                    <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
                    <input type="text" name="model" id="shoe-model" placeholder="Model" />
                    <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
                    <input type="text" name="release" id="shoe-release" placeholder="Release date" />
                    <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
                    <input type="text" name="value" id="shoe-value" placeholder="Value" />
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;

export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(ctx, onSubmit)));
}
async function onSubmit(ctx, data, event) {
    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are reqiered!') // validation for all fields  if neccessary !!
    }
    await dataService.create(
        {
            brand: data.brand,
            model: data.model,
            imageUrl: data.imageUrl,
            release: data.release,
            designer: data.designer,
            value: data.value
        }
    );
    event.target.reset();
    ctx.page.redirect('/catalog');
}