import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js';

const catalogTemplate = (currentData) => html`
  <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
          ${currentData.length>1
          ?html`  <ul class="other-books-list">
           ${currentData.map(previewTemplate)}
       </ul>`
       :html`<p class="no-books">No books in database!</p>`}
            <!-- Display paragraph: If there are no books in the database -->
        </section>
`

const previewTemplate = (data) => html`
       <li class="otherBooks">
                    <h3>${data.title}</h3>
                    <p>Type: ${data.type}</p>
                    <p class="img"><img src="${data.imageUrl}"></p>
                    <a class="button" href="/details/${data._id}">Details</a>
                </li>

 `;
export async function catalogPage(ctx) {
    
    const currentData = await dataService.getAll();
    ctx.render(catalogTemplate(currentData));
}