import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js' 
import { createSubmitHandler } from "../util.js";


const editTemplate = (currentData, onSubmit) => html`
     <!-- here we add the html for the edit html which may be will be same with the create html and add eventListener to the form  -->
`;

export async function editPage(ctx) {
    const itemId = ctx.params.id;
    const item = await dataService.getById(itemId);
    ctx.render(editTemplate(item, createSubmitHandler(ctx, onSubmit)));
}
async function onSubmit(ctx, data, event) {
    const itemId = ctx.params.id;

    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are reqiered!') // check all the fields are filled
    }
    await dataService.update(itemId, {
     //here we add properties for the currnet object
    }
    );
    event.target.reset();
    ctx.page.redirect('/details/' + itemId);
}