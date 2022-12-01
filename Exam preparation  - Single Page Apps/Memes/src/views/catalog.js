import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js' // this service will be change for the current app!!!

const catalogTemplate = (currentData) => html`
<!-- // add here the html for the catalog data (a.k.a all data in the app) -->
<section id="meme-feed">
    <h1>All Memes</h1>
    ${currentData.length > 0 
        ? html`
    <div id="memes">
        ${currentData.map(previewTemplate)}
    </div>`
    : html`<p class="no-memes">No memes in database.</p>`}
</section>
`
const previewTemplate = (data) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${data.title}</p>
            <img class="meme-image" alt="meme-img" src="${data.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${data._id}">Details</a>
        </div>
    </div>
</div>
`;

export async function catalogPage(ctx) {

    const currentDatas = await dataService.getAll();
    ctx.render(catalogTemplate(currentDatas));
}