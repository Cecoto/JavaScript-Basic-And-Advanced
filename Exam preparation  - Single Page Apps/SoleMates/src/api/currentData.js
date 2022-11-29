import * as api from './api.js';

const endpoints = {

    search: '/data/shoes?where=brand%20LIKE%20%22${query}%22',
    games: '/data/shoes?sortBy=_createdOn%20desc',
    create: '/data/shoes',
    byId: '/data/shoes/',
    deleteById: '/data/shoes/',
    update: '/data/shoes/'

};

export async function search() {
    return api.get(endpoints.search);
}
export async function getAll() {
    return api.get(endpoints.games);
}
export async function create(data) {
    return api.post(endpoints.create, data);
}
export async function getById(id) {
    return api.get(endpoints.byId + id);
}
export async function deleteById(id) {
    return api.del(endpoints.deleteById + id);
}
export async function update(id,data) {
    return api.put(endpoints.update + id,data)
}