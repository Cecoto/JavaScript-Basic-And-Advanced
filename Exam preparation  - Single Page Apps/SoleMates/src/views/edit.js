import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'
import { createSubmitHandler } from "../util.js";


const editTemplate = (currentData, onSubmit) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit item</h2>
            <form @submit=${onSubmit} class="edit-form">
                <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${currentData.brand} />
                <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${currentData.model} />
                <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${currentData.imageUrl} />
                <input type="text" name="release" id="shoe-release" placeholder="Release date"
                    .value=${currentData.release} />
                <input type="text" name="designer" id="shoe-designer" placeholder="Designer"
                    .value=${currentData.designer} />
                <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${currentData.value} />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;

export async function editPage(ctx) {
    const dataId = ctx.params.id;
    const data = await dataService.getById(dataId);
    ctx.render(editTemplate(data, createSubmitHandler(ctx, onSubmit)));
}
async function onSubmit(ctx, data, event) {
    const dataId = ctx.params.id;

    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are reqiered!') // check all the fields are filled
    }
    await dataService.update(dataId, {
        //here we add properties for the currnet object
        brand: data.brand,
        model: data.model,
        imageUrl: data.imageUrl,
        release: data.release,
        designer: data.designer,
        value: data.value
    }
    );
    event.target.reset();
    ctx.page.redirect('/details/' + dataId);
}