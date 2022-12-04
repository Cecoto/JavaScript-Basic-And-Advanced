
import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`

<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

<nav>
    <div>
        <a href="/catalog">Dashboard</a>
    </div>

    <!-- Logged-in users -->
    ${user ? html` <div class="user">
        <a href="/create">Add Album</a>
        <a href="/logout">Logout</a>
    </div>`
          : html`<div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>`}

</nav>
`;
let nav = document.querySelector('header');
let root = document.querySelector('main');

function ctxRender(content) {
    render(content, root);

}

export function addRender(ctx, next) {

    render(navTemplate(ctx.user), nav);
    ctx.render = ctxRender;
    next();

}