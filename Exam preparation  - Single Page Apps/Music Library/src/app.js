import page from '../node_modules/page/page.mjs';
import { logout } from './api/users.js';

import { addSession } from './middlewares/session.js';
import { addRender } from './middlewares/render.js';

import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { deatailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

import { createPage } from './views/create.js';


page(addSession);
page(addRender);


page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', deatailsPage);
page('/edit/:id', editPage);
page('/logout',onLogout);

page.start();

function onLogout() {
logout();
page.redirect('/catalog');
}
