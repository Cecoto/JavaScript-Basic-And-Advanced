import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js';
const myBooksPageTemplate = (currentDatas) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    ${currentDatas.length > 0
    ? html`
    <ul class="my-books-list">
        ${currentDatas.map(previewTemplate)}
    </ul>
    `: html`<p class="no-books">No books in database!</p>`}

    <!-- Display paragraph: If the user doesn't have his own books  -->

</section>
`;
const previewTemplate = (data) => html`
    <li class="otherBooks">
        <h3>${data.title}</h3>
        <p>Type: ${data.type}</p>
        <p class="img"><img src="${data.imageUrl}"></p>
        <a class="button" href="/details/${data._id}">Details</a>
    </li>

 `;

export async function myBooksPage(ctx) {

    const currentDatas = await dataService.myBooks(ctx.user._id);
    ctx.render(myBooksPageTemplate(currentDatas));
}