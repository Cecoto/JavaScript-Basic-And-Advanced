
import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
 <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/catalog">Dashboard</a>
                    <!-- Guest users -->
                    ${!user
                        ?html`<div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>`
                    :html`<div id="user">
                        <span>Welcome, ${user.email}</span>
                        <a class="button" href="/myBooks">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>`}
               
                    <!-- Logged-in users -->
                    
                </section>
            </nav>
`;
let nav  =document.querySelector('header');
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