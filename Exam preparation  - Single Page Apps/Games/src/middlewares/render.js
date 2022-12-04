
import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
 <h1><a class="home" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
            
                ${user?html` <div id="user">
                    <a href="/create">Create Game</a>
                    <a href="/logout">Logout</a>
                </div>`
                : html`<div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
               
            </nav>
`;
let nav  = document.querySelector('header');
let root = document.querySelector('main'); // main

function ctxRender(content) {
    render(content, root);
    //all the content is added to the main(root)
}

export function addRender(ctx, next) {

    render(navTemplate(ctx.user),nav);
    ctx.render = ctxRender;
    next();
   
}