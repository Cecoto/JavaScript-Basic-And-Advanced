import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js';

const catalogTemplate = (currentData) => html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    <!-- Display a div with information about every post (if any)-->
        ${currentData.length > 0
        ?html`<div class="all-posts">
            ${currentData.map(previewTemplate)}
        </div>`
             : html`<h1 class="title no-posts-title">No posts yet!</h1>`}
</section>
`

const previewTemplate = (data) => html`
    <div class="post">
        <h2 class="post-title">${data.title}</h2>
        <img class="post-image" src="${data.imageUrl}" alt="Material Image">
        <div class="btn-wrapper">
            <a href="/details/${data._id}" class="details-btn btn">Details</a>
        </div>
    </div>
  `;

export async function catalogPage(ctx) {

    const currentData = await dataService.getAll();
    ctx.render(catalogTemplate(currentData));

}