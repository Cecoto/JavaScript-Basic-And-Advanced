import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'

const detailsTemplate = (currentData, onDelete, ctx, counter, onClick) => html`
            <section id="details">
                <div id="details-wrapper">
                    <img id="details-img" src="${currentData.imageUrl}" alt="example1" />
                    <p id="details-title">${currentData.title}</p>
                    <p id="details-category">
                        Category: <span id="categories">${currentData.category}</span>
                    </p>
                    <p id="details-salary">
                        Salary: <span id="salary-number">${currentData.salary}</span>
                    </p>
                    <div id="info-wrapper">
                        <div id="details-description">
                            <h4>Description</h4>
                            <span>${currentData.description}</span>
                        </div>
                        <div id="details-requirements">
                            <h4>Requirements</h4>
                            <span>${currentData.requirements}</span>
                        </div>
                    </div>
                    <p>Applications: <strong id="applications">${counter}</strong></p>
            
                    <!--Edit and Delete are only for creator-->
                    ${currentData.isOwner ? html` <div id="action-buttons">
                        <a href="/edit/${currentData._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="/" id="delete-btn">Delete</a>` : nothing}
            
            
                        <!--Bonus - Only for logged-in users ( not authors )-->
                        ${!currentData.isOwner && ctx.user 
                            ? html`<a @click=${onClick} href="/details/${currentData._id}"id="apply-btn">Apply</a>` 
                            : nothing}
            
                    </div>
                </div>
            </section>
        `;

export async function deatailsPage(ctx) {
    const itemId = ctx.params.id;
    let counter = 0;
    const item = await dataService.getById(itemId);
    if (ctx.user) {
        item.isOwner = ctx.user._id == item._ownerId;
    }

    ctx.render(detailsTemplate(item, onDelete, ctx, counter,onClick)); // here we redirect after the clicked button

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?'); //confirm window to ask user if he is sure that he want to delete this data!!!
        if (choice) { // if true delete data by id, else do nothing!!
            await dataService.deleteById(itemId);
            ctx.page.redirect('/catalog');
        }

    }
    async function onClick(e) {
        e.preventDefault();
        counter++;
        e.target.style.display = 'none';
    }
}