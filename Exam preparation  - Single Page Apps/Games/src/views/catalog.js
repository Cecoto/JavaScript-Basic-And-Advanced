import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js';

const catalogTemplate = (currentData) => html`

<section id="catalog-page">
    <h1>All Games</h1>
    ${currentData.length > 0
     ? html`${currentData.map(previewTemplate)}`
     : html`<h3 class="no-articles">No articles yet</h3>`}

</section>`

const previewTemplate = (data) => html`
        <div class="allGames">
            <div class="allGames-info">
                <img src="${data.imageUrl}">
                <h6>${data.category}</h6>
                <h2>${data.title}</h2>
                <a href="/details/${data._id}" class="details-button">Details</a>
            </div>
        
        </div>
 `;


export async function catalogPage(ctx) {

    const currentData = await dataService.getAll();
    ctx.render(catalogTemplate(currentData));
}