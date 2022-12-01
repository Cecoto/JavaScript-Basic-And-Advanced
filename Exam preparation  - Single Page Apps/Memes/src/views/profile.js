import { html } from "../../node_modules/lit-html/lit-html.js";

import * as gameService from '../api/currentData.js'

const profilePageTemplate = (user, userMemes) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        ${user.gender == 'male'
        ? html`<img id="user-avatar-url" alt="user-profile" src="/images/male.png">`
        : html`<img id="user-avatar-url" alt="user-profile" src="/images/female.png">`}
        <div class="user-content">
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${userMemes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">

        ${userMemes.length > 0 ?
            html`${userMemes.map(previewTemplate)}`
            : html`<p class="no-memes">No memes in database.</p>`}

    </div>
</section>
`;

const previewTemplate = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>
`;
export async function profilePage(ctx) {

     
    let userMemes = [];


    let allMemes = await gameService.getAll();


    ctx.render(profilePageTemplate(ctx.user, userMemes));
}

