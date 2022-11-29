import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'

const detailsTemplate = (currentData, onDelete) => html`
            <!--  here we add the html for the details and add eventListener to the button Delete, also we get the data from the service for data(the module).
                                                //Then we check if this user from ctx.user is the owner of this data and if it is owner we allow him to click the buttons edit and delete!!! -->
            <section id="details">
                <div id="details-wrapper">
                    <p id="details-title">Shoe Details</p>
                    <div id="img-wrapper">
                        <img src="${currentData.imageUrl}" alt="example1" />
                    </div>
                    <div id="info-wrapper">
                        <p>Brand: <span id="details-brand">${currentData.brand}</span></p>
                        <p>
                            Model: <span id="details-model">${currentData.model}</span>
                        </p>
                        <p>Release date: <span id="details-release">${currentData.release}</span></p>
                        <p>Designer: <span id="details-designer">${currentData.designer}</span></p>
                        <p>Value: <span id="details-value">${currentData.value}</span></p>
                    </div>
            
                    ${currentData.isOwner
                    ? html` <div id="action-buttons">
                        <a href="/edit/${currentData._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="/catalog" id="delete-btn">Delete</a>
                    </div>`: nothing}
            
            
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