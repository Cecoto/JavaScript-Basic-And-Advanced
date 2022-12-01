
import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
<nav>
    <a href="/catalog">Theater</a>
    <ul>
        ${user 
            ? html`<li><a href="/profile">Profile</a></li>
        <li><a href="/create">Create Event</a></li>
        <li><a href="/logout">Logout</a></li>`
        : html`<li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>`}

    </ul>
</nav>
`;
let nav = document.querySelector('header'); // where the nav will be
let root = document.querySelector('main'); // main

function ctxRender(content) {
    render(content, root);
    //all the content is added to the main(root)
}

export function addRender(ctx, next) {

    render(navTemplate(ctx.user), nav);
    ctx.render = ctxRender;
    next();

}