import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'

const detailsTemplate = (currentData, onDelete) => html`
            <section id="details-page" class="details">
                <div class="book-information">
                    <h3>${currentData.title}</h3>
                    <p class="type">Type: ${currentData.type}</p>
                    <p class="img"><img src="${currentData.imageUrl}"></p>
                    <div class="actions">
                        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                        ${currentData.isOwner ? html`<a class="button" href="/edit/${currentData._id}">Edit</a>
                        <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : nothing}
                        <!-- Bonus -->
                        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                        <a class="button" href="#">Like</a>
            
                        <!-- ( for Guests and Users )  -->
                        <div class="likes">
                            <img class="hearts" src="/images/heart.png">
                            <span id="total-likes">Likes: 0</span>
                        </div>
                        <!-- Bonus -->
                    </div>
                </div>
                <div class="book-description">
                    <h3>Description:</h3>
                    <p>${currentData.description}</p>
                </div>
            </section>
        `;

export async function deatailsPage(ctx) {
    const itemId = ctx.params.id;

    const item = await dataService.getById(itemId);
    if (ctx.user) {
        item.isOwner = ctx.user._id == item._ownerId;
    }

    ctx.render(detailsTemplate(item, onDelete)); // here we redirect after the clicked button

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?'); //confirm window to ask user if he is sure that he want to delete this data!!!
        if (choice) { // if true delete data by id, else do nothing!!
            await dataService.deleteById(itemId);
            ctx.page.redirect('/catalog');
        }

    }
}