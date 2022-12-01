import { html, nothing } from "../../node_modules/lit-html/lit-html.js"; // nothing is added here if we want to show nothing to specific field like buttons etc.
import * as gameService from '../api/currentData.js' // this service will be change for the current app!!!

const detailsTemplate = (meme, onDelete) => html`
            <!--  here we add the html for the details and add eventListener to the button Delete, also we get the data from the service for data(the module).
                        //Then we check if this user from ctx.user is the owner of this data and if it is owner we allow him to click the buttons edit and delete!!! -->
            <section id="meme-details">
                <h1>Meme Title: ${meme.title}
            
                </h1>
                <div class="meme-details">
                    <div class="meme-img">
                        <img alt="meme-alt" src="${meme.imageUrl}">
                    </div>
                    <div class="meme-description">
                        <h2>Meme Description</h2>
                        <p>
                            ${meme.description}
                        </p>

                        ${meme.isOwner 
                            ? html` <a class="button warning" href="/edit/${meme._id}">Edit</a>
                        <button @click=${onDelete} class="button danger">Delete</button>` 
                        : nothing}
                    </div>
                </div>
            </section>
        `;

export async function deatailsPage(ctx) {
    const memeId = ctx.params.id;

    const meme = await gameService.getById(memeId);

    if (ctx.user) {
        meme.isOwner = ctx.user._id == meme._ownerId;
    }

    ctx.render(detailsTemplate(meme, onDelete)); // here we redirect after the clicked button

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this game?'); //confirm window to ask user if he is sure that he want to delete this data!!!
        if (choice) { // if true delete data by id, else do nothing!!
            await gameService.deleteById(memeId);
            ctx.page.redirect('/catalog');
        }

    }
}