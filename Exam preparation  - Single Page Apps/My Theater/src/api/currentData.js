import * as api from './api.js';

const endpoints = {

    recent: 'path for getting recent data',
    allData: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    create: '/data/theaters',
    byId: '/data/theaters/',
    deleteById: '/data/theaters/',
    update: '/data/theaters/'


};

export async function getRecent() {
    return api.get(endpoints.recent);
}
export async function getAll() {
    return api.get(endpoints.allData);
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