import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js';

const catalogTemplate = (allSongs) => html`
<section id="dashboard">
    <h2>Albums</h2>
    ${allSongs.length > 0
        ? html` <ul class="card-wrapper">
        ${allSongs.map(previewTemplate)}
    </ul>`
    :html`<h2>There are no albums added yet.</h2>`}

</section>
`

const previewTemplate = (song) => html`

<li class="card">
    <img src="${song.imageUrl}" alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${song.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${song.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${song.sales}</span></p>
    <a class="details-btn" href="/details/${song._id}">Details</a>
</li>`;
export async function catalogPage(ctx) {

    const allSongs = await dataService.getAll();
    ctx.render(catalogTemplate(allSongs));
}