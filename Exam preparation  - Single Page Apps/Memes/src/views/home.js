import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'; // this service will be change for the current app!!!

const homeTemplate = (user, redirect) => html`

${user?html `<section id="welcome">
            <div id="welcome-container">
                <h1>Welcome To Meme Lounge</h1>
                <img src="/images/welcome-meme.jpg" alt="meme">
                <h2>Login to see our memes right away!</h2>
                <div id="button-div">
                    <a href="/login" class="button">Login</a>
                    <a href="/register" class="button">Register</a>
                </div>
            </div>
        </section>
`:redirect
}`;

// const previewTemplate = (currentData) => html`

//  <!-- here we are makeing a template for each data and then we map this data into the whole sections where all data needs to be stored -->
//  `;
export async function homePage(ctx) {

    // const currentDatas = await dataService.getRecent();
    let redirectToCatalog = ctx.page.redirect('/catalog');
    ctx.render(homeTemplate(ctx.user,redirectToCatalog));
}