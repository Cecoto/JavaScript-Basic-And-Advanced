import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js' 
import { createSubmitHandler } from "../util.js";


const editTemplate = (song, onSubmit) => html`
   <section id="edit">
        <div class="form">
          <h2>Edit Album</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${song.singer}/>
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${song.album}/>
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${song.imageUrl}/>
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${song.release}/>
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${song.label}/>
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${song.sales}/>

            <button type="submit">post</button>
          </form>
        </div>
      </section>`;

export async function editPage(ctx) {
    const itemId = ctx.params.id;
    const item = await dataService.getById(itemId);
    ctx.render(editTemplate(item, createSubmitHandler(ctx, onSubmit)));
}
async function onSubmit(ctx, data, event) {
    const itemId = ctx.params.id;

    if (Object.values(data).some(f => f == '')) {
        return alert('All fields are reqiered!');
    }
    await dataService.update(itemId,{
        singer: data.singer,
        album: data.album, 
        imageUrl: data.imageUrl, 
        release: data.release, 
        label: data.label, 
        sales: data.sales
      } 
    );
    event.target.reset();
    ctx.page.redirect('/details/' + itemId);
}