import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'

const detailsTemplate = (currentData, onDelete) => html`
            <section id="detailsPage">
                <div class="details">
                    <div class="animalPic">
                        <img src="${currentData.image}">
                    </div>
                    <div>
                        <div class="animalInfo">
                            <h1>Name: ${currentData.name}</h1>
                            <h3>Breed: ${currentData.breed}</h3>
                            <h4>Age: ${currentData.age}</h4>
                            <h4>Weight: ${currentData.weight}</h4>
                            <h4 class="donation">Donation: 0$</h4>
                        </div>
                        <!-- if there is no registered user, do not display div-->
                        ${currentData.isOwner ? html` <div class="actionBtn">
                            <!-- Only for registered user and creator of the pets-->
                            <a href="/edit/${currentData._id}" class="edit">Edit</a>
                            <a @click=${onDelete}href="javascript:void(0)" class="remove">Delete</a>
                        </div>`: html`<a href="javascript:void(0)" class="donate">Donate</a>`}
            
                    </div>
                </div>
            </section>
        `;

export async function deatailsPage(ctx) {
    const itemId = ctx.params.id;
    const isLogged = ctx.user;
    const item = await dataService.getById(itemId);
    item.user = isLogged;
    if (ctx.user) {
        item.isOwner = ctx.user._id == item._ownerId;
    }

    ctx.render(detailsTemplate(item, onDelete)); // here we redirect after the clicked button

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?'); //confirm window to ask user if he is sure that he want to delete this data!!!
        if (choice) { // if true delete data by id, else do nothing!!
            await dataService.deleteById(itemId);
            ctx.page.redirect('/');
        }

    }
}