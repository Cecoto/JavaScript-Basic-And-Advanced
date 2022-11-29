import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js';
import { createSubmitHandler } from "../util.js";

const searchTemplate = (data, onSearch, params) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSearch} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
    <div id="search-container">

        ${data.length > 0
            ? html` <ul class="card-wrapper">


            <li class="card">
                <img src="./images/travis.jpg" alt="travis" />
                <p>
                    <strong>Brand: </strong><span class="brand">Air Jordan</span>
                </p>
                <p>
                    <strong>Model: </strong><span class="model">1 Retro High TRAVIS SCOTT</span>
                </p>
                <p><strong>Value:</strong><span class="value">2000</span>$</p>
                <a class="details-btn" href="">Details</a>
            </li>
        </ul>
        `:html`<h2>There are no results found.</h2>`}
       
    </div>
</section>

`;


export async function searchPage(ctx) {
    let params = ctx.querystring.split('=')[1];
    let data = [];
    if (params) {
        data = await dataService.search(decodeURIComponent(params));
    }
    else {
        data = 0;
    }

    ctx.render(searchTemplate(data, onSearch, params));

    function onSearch(event) {
        event.preventDefault();
        let formData = new FormData(event.target);

        let search = formData.get('search');
        if (search) {
            ctx.page.redirect('/search?query=' + encodeURIComponent(search));
        }
    }
}
