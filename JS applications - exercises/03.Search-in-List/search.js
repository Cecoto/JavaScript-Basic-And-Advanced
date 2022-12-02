import { html, render, _$LH } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

let cardTemplate = html`
<ul>
${towns.map(item => {
   return html`<li id=${item}>${item}</li>`
})}
</ul>
`;
let card = document.getElementById('towns');
render(cardTemplate, card);

document.querySelector('button').addEventListener('click', search);


function search() {
   let textContents = [...document.querySelectorAll('li')].forEach(li => li.classList.remove('active'));

   let text = document.getElementById('searchText').value;
   let result = towns.filter(t => {
      if (t.includes(text)) {
         let match = document.getElementById(`${t}`);
         match.setAttribute('class', 'active');
         return t;
      }
   });

   let resultHtml = document.getElementById('result');
   resultHtml.textContent = `${result.length} matches found`;

   document.getElementById('searchText').value = '';
}


