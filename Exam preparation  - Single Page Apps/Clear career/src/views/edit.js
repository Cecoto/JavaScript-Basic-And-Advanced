import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'
import { createSubmitHandler } from "../util.js";


const editTemplate = (currentData, onSubmit) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${onSubmit} class="edit-form">
                <input type="text" name="title" id="job-title" placeholder="Title" .value=${currentData.title} />
                <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url"
                    .value=${currentData.imageUrl} />
                <input type="text" name="category" id="job-category" placeholder="Category"
                    .value=${currentData.category} />
                <textarea id="job-description" name="description" placeholder="Description" rows="4"
                    cols="50" .value=${currentData.description}></textarea>
                <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                    cols="50" .value=${currentData.requirements}></textarea>
                <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${currentData.salary} />
                    <button type="submit">post</button>
            </form>
        </div>
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
        imageUrl: data.imageUrl,
        category: data.category,
        description: data.description,
        requirements: data.requirements,
        salary: data.salary
    }
    );
    event.target.reset();
    ctx.page.redirect('/details/' + itemId);
}