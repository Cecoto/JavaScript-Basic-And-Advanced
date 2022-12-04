import { html, render, } from "../node_modules/lit-html/lit-html.js";
// В първият html вземаме дата със всички студенти а във втория вече след мап операцията вземаме всеки по отделно и така достъпваме пропъртитата на студента
export const studentsTemplate = (studentsData) => html`
${studentsData.map(s => html`   
<tr>
    <td>${s.firstName} ${s.lastName}</td>
    <td>${s.email}</td>
    <td>${s.course}</td>
</tr>
`)}
`