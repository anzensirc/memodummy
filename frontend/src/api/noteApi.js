import api from "./axios";

const noteApi = {

    getAll() {
        return api.get("/notes");
    },

    getById(id) {
        return api.get(`/notes/${id}`);
    },

    create(data) {
        return api.post("/notes", data);
    },

    update(id, data) {
        return api.put(`/notes/${id}`, data);
    },

    remove(id) {
        return api.delete(`/notes/${id}`);
    }

};

export default noteApi;