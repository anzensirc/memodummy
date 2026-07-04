const noteModel = require("../models/noteModel");

function normalizeContent(content) {

    if (!Array.isArray(content)) {
        throw new Error("Content must be an array.");
    }

    const cleaned = content
        .map(item => String(item).trim())
        .filter(item => item.length > 0)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

    if (cleaned.length === 0) {
        throw new Error("Content cannot be empty.");
    }

    return cleaned;
}

exports.getAll = async () => {

    const notes = await noteModel.findAll();

    return notes.map(note => ({
        ...note,
        header: note.header || "(Tanpa Judul)"
    }));

};

exports.getById = async (id) => {

    const note = await noteModel.findById(id);

    if (!note) return null;

    return {
        ...note,
        header: note.header || "(Tanpa Judul)",
        content: JSON.parse(note.content)
    };

};

exports.create = async ({ header, content }) => {

    const now = new Date().toISOString();

    const cleaned = normalizeContent(content);

    return await noteModel.create({
        header: header?.trim() || null,
        content: JSON.stringify(cleaned),
        created_at: now,
        updated_at: now
    });

};

exports.update = async (id, { header, content }) => {

    const cleaned = normalizeContent(content);

    return await noteModel.update(id, {
        header: header?.trim() || null,
        content: JSON.stringify(cleaned),
        updated_at: new Date().toISOString()
    });

};

exports.remove = async (id) => {

    return await noteModel.delete(id);

};