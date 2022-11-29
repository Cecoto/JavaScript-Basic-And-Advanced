import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js';

const catalogTemplate = (currentData) => html`
<section id="dashboard">
    <h2>Collectibles</h2>
    ${currentData.length > 0
        ? html`
     ${currentData.map(previewTemplate)}
    `: html`
    <h2>There are no items added yet.</h2>
    `}
</section>
`;

const previewTemplate = (data) => html`

<li class="card">
    <img src="${data.imageUrl}" alt="eminem" />
    <p>
        <strong>Brand: </strong><span class="brand">${data.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${data.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${data.value}</span>$</p>
    <a class="details-btn" href="/details/${data._id}">Details</a>
</li>
 `;
export async function catalogPage(ctx) {

    const currentData = await dataService.getAll();
    ctx.render(catalogTemplate(currentData));
}