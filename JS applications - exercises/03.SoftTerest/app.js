import "./src/api/api.js";
import { showCatalog } from "./src/views/catalog.js";
import { showCreate } from "./src/views/create.js";
import { showDetails } from "./src/views/details.js";
import { showHome } from "./src/views/home.js";
import { showLogin } from "./src/views/login.js";
import { showRegister } from "./src/views/register.js";
import { logout } from "./src/api/data.js";


let main = document.querySelector('main');


let links = {
    'homeLink': 'home',
    'getStartedLink': 'home',
    'loginLink': 'login',
    'registerLink': 'register',
    'createLink': 'create',
    'catalogLink': 'catalog',
    'detailsLink': 'details'

};
let views = {
    'home': showHome,
    'login': showLogin,
    'register': showRegister,
    'catalog': showCatalog,
    'create': showCreate,
    'details': showDetails
}
let nav = document.getElementById('navbarResponsive').addEventListener('click', onNavigation);

document.getElementById('logoutBtn').addEventListener('click',async (e) =>{
    e.preventDefault();
    await logout();
    updateNav();
    goto(home);
});
function onNavigation(event) {
    event.preventDefault();
    let name = links[event.target.id];
    console.log(name);
    goto(name);
}

let ctx = {
    showSection,
    updateNav,
    goto

}
function goto(name, ...params) {
    let view = views[name];
    view(ctx, ...params);
}

function showSection(name) {
    main.replaceChildren(name);
}

updateNav();

function updateNav() {
    //1. add classes to list items => in the html file
    //2. get userData from sessionStorage
    //3. hide buttons 

    let userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData != null) {
        [...nav.querySelectorAll('.user')].forEach(l => l.style.display == 'block');
        [...nav.querySelectorAll('.guest')].forEach(l => l.style.display == 'none');
    }
    // else {
    //     [...nav.querySelectorAll('.user')].forEach(l => l.style.display = 'none');
    //     [...nav.querySelectorAll('.guest')].forEach(l => l.style.display = 'block');
    // }
}



