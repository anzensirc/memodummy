const noteService = require("../services/noteService");

/**
 * GET /api/notes
 */
exports.getAll = async (req, res) => {
    try {
        const notes = await noteService.getAll();

        res.status(200).json(notes);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

/**
 * GET /api/notes/:id
 */
exports.getById = async (req, res) => {
    try {

        const id = Number(req.params.id);

        const note = await noteService.getById(id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json(note);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};

/**
 * POST /api/notes
 */
exports.create = async (req, res) => {
    try {

        const { header, content } = req.body;

        const id = await noteService.create({
            header,
            content
        });

        res.status(201).json({
            message: "Note created successfully",
            id
        });

    } catch (err) {

        res.status(400).json({
            message: err.message
        });

    }
};

/**
 * PUT /api/notes/:id
 */
exports.update = async (req, res) => {
    try {

        const id = Number(req.params.id);

        const { header, content } = req.body;

        const updated = await noteService.update(id, {
            header,
            content
        });

        if (!updated) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note updated successfully"
        });

    } catch (err) {

        res.status(400).json({
            message: err.message
        });

    }
};

/**
 * DELETE /api/notes/:id
 */
exports.remove = async (req, res) => {
    try {

        const id = Number(req.params.id);

        const deleted = await noteService.remove(id);

        if (!deleted) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        res.status(200).json({
            message: "Note deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};