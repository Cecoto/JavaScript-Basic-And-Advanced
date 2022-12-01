import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js';
const homeTemplate = (currentDatas) => html`
 <!-- home page html content -->
`;


export async function homePage(ctx) {

    const currentDatas = await dataService.getRecent();
    ctx.render(homeTemplate(currentDatas));
}