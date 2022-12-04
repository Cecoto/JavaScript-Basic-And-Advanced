import * as api from './api.js';

const endpoints = {

  
    allData: '/data/albums?sortBy=_createdOn%20desc',
    create: '/data/albums',
    byId: '/data/albums/',
    deleteById: '/data/albums/',
    update: '/data/albums/'


};


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