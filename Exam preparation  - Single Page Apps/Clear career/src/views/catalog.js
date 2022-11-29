import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js';

const catalogTemplate = (currentData) => html`
  <section id="dashboard">

    <h2>Job Offers</h2>

    ${currentData.length>0
    ?html`${currentData.map(previewTemplate)}`
    :html`<h2>No offers yet.</h2>`}

  </section>
`

const previewTemplate = (data) => html`
  <div class="offer">
    <img src="${data.imageUrl}" alt="example1" />
    <p>
      <strong>Title: </strong><span class="title">${data.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${data.salary}</span></p>
    <a class="details-btn" href="/details/${data._id}">Details</a>
  </div>
  `;
export async function catalogPage(ctx) {

  const currentData = await dataService.getAll();
  ctx.render(catalogTemplate(currentData));
}