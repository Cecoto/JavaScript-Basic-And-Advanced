
import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
<h1><a href="/">Orphelp</a></h1>

<nav>
    <a href="/catalog">Dashboard</a>

    ${user 
        ? html`<div id="user">
        <a href="/myPosts">My Posts</a>
        <a href="/create">Create Post</a>
        <a href="/logout">Logout</a>
    </div>`
    : html`<div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`}

</nav>
`;
let header = document.querySelector('#box header')
let root = document.getElementById(`main-content`); // main

function ctxRender(content) {
    render(content, root);
 
}

export function addRender(ctx, next) {

    render(navTemplate(ctx.user), header);
    ctx.render = ctxRender;
    next();

}