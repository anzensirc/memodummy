import noteApi from "../api/noteApi";

function useNotes() {

    async function getAll() {
        const res = await noteApi.getAll();
        return res.data;
    }

    async function getById(id) {
        const res = await noteApi.getById(id);
        return res.data;
    }

    async function create(data) {
        const res = await noteApi.create(data);
        return res.data;
    }

    async function update(id, data) {
        const res = await noteApi.update(id, data);
        return res.data;
    }

    async function remove(id) {
        const res = await noteApi.remove(id);
        return res.data;
    }

    return {
        getAll,
        getById,
        create,
        update,
        remove
    };

}

export default useNotes;