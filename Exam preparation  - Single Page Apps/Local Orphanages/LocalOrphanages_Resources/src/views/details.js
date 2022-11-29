import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'

const detailsTemplate = (currentData, onDelete, user, onDonate) => html`
            <section id="details-page">
                <h1 class="title">Post Details</h1>
            
                <div id="container">
                    <div id="details">
                        <div class="image-wrapper">
                            <img src="${currentData.imageUrl}" alt="Material Image" class="post-image">
                        </div>
                        <div class="info">
                            <h2 class="title post-title">${currentData.title}</h2>
                            <p class="post-description">Description: ${currentData.description}</p>
                            <p class="post-address">Address: ${currentData.address}</p>
                            <p class="post-number">Phone number: ${currentData.phone}</p>
                            <p class="donate-Item">Donate Materials: 0</p>
            
                            <!--Edit and Delete are only for creator-->
                            <div class="btns">
                            ${currentData.isOwner ? html`
                                <a href="/edit/${currentData._id}" class="edit-btn btn">Edit</a>
                                <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>
            
                                <!--Bonus - Only for logged-in users ( not authors )-->
            
            
                            `: html`<a @click=${onDonate} href="javascript:void(0)" class="donate-btn btn">Donate</a>`}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

export async function deatailsPage(ctx) {
    const itemId = ctx.params.id;

    const item = await dataService.getById(itemId);
    item.ID = itemId;
    if (ctx.user) {
        item.isOwner = ctx.user._id == item._ownerId;
    }

    ctx.render(detailsTemplate(item, onDelete, ctx.user, onDonate)); // here we redirect after the clicked button

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?'); //confirm window to ask user if he is sure that he want to delete this data!!!
        if (choice) { // if true delete data by id, else do nothing!!
            await dataService.deleteById(itemId);
            ctx.page.redirect('/catalog');
        }

    }
    async function onDonate(e) {

        item.counter++;

    }
}