
import { render, html } from "../../node_modules/lit-html/lit-html.js";

const navTemplate = (user) => html`
 <nav>
            <section class="logo">
                <img src="./images/logo.png" alt="logo">
            </section>
            <ul>
                <!--Users and Guest-->
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Dashboard</a></li>
                ${!user
                    ?html`<li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>`
                :html` <li><a href="/create">Create Postcard</a></li>
                <li><a href="/logout">Logout</a></li>`}
             </ul>
        </nav>
`;
let header  = document.querySelector('header');
let root = document.getElementById('content');

function ctxRender(content) {
    render(content, root);
    //all the content is added to the main(root)
}

export function addRender(ctx, next) {

    render(navTemplate(ctx.user),header);
    ctx.render = ctxRender;
    next();
   
}