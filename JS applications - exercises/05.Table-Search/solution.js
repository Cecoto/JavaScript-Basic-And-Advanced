import { render, } from "../node_modules/lit-html/lit-html.js";
import { getData } from "./api.js";
import { search} from "./search.js";
import { studentsTemplate } from "./studentsTemplate.js";

let tableBody = document.querySelector('.container tbody');
let studentsData = await getData();
let template = studentsTemplate(Object.values(studentsData));

render(template, tableBody);

document.querySelector('#searchBtn').addEventListener('click', search);


