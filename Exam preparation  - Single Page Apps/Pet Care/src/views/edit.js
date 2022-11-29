import { html } from "../../node_modules/lit-html/lit-html.js";
import * as dataService from '../api/currentData.js' 
import { createSubmitHandler } from "../util.js";


const editTemplate = (currentData, onSubmit) => html`
      <section id="editPage">
            <form @submit=${onSubmit} class="editForm">
                <img src="./images/editpage-dog.jpg">
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" .value="${currentData.name}">
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" .value="${currentData.breed}">
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" .value="${currentData.age}">
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" .value="${currentData.weight}">
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" .value="${currentData.image}">
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
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
        name: data.name,
        breed: data.breed,
        age: data.age,
        weight: data.weight,
        image: data.image
    }
    );
    event.target.reset();
    ctx.page.redirect('/details/' + itemId);
}