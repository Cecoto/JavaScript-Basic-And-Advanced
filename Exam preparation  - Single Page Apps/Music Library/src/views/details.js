import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js'

const detailsTemplate = (song, onDelete, user, onLike) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src="${song.imageUrl}" alt="example1" />
      </div>
      <div id="info-wrapper">
        <p><strong>Band:</strong><span id="details-singer">${song.singer}</span></p>
        <p>
          <strong>Album name:</strong><span id="details-album">${song.album}</span>
        </p>
        <p><strong>Release date:</strong><span id="details-release">${song.release}</span></p>
        <p><strong>Label:</strong><span id="details-label">${song.label}</span></p>
        <p><strong>Sales:</strong><span id="details-sales">${song.sales}</span></p>
      </div>
      <div id="likes">Likes: <span id="likes-count">0</span></div>
  
      <div id="action-buttons">
        ${song.isOwner ? html`
  
        <a href="/edit/${song._id}" id="edit-btn">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        `: nothing}
        ${user && song.isOwner == false ? html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>` :
        nothing}
      </div>
    </div>
  </section>
        `;

export async function deatailsPage(ctx) {
  const itemId = ctx.params.id;

  const item = await dataService.getById(itemId);
  if (ctx.user) {
    item.isOwner = ctx.user._id == item._ownerId;
  }

  ctx.render(detailsTemplate(item, onDelete, ctx.user, onLike));

  async function onDelete() {
    const choice = confirm('Are you sure you want to delete this item?');
    if (choice) {
      await dataService.deleteById(itemId);
      ctx.page.redirect('/catalog');
    }

  }
  async function onLike(e) {
    e.target.style.display = 'none';

  }
}