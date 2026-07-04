const db = require("../config/database");

exports.findAll = () => {
    return new Promise((resolve, reject) => {

        const sql = `
            SELECT
                id,
                header,
                created_at,
                updated_at
            FROM notes
            ORDER BY updated_at DESC
        `;

        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });

    });
};

exports.findById = (id) => {
    return new Promise((resolve, reject) => {

        const sql = `
            SELECT *
            FROM notes
            WHERE id = ?
        `;

        db.get(sql, [id], (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });

    });
};

exports.create = (note) => {
    return new Promise((resolve, reject) => {

        const sql = `
            INSERT INTO notes
            (
                header,
                content,
                created_at,
                updated_at
            )
            VALUES (?, ?, ?, ?)
        `;

        db.run(
            sql,
            [
                note.header,
                note.content,
                note.created_at,
                note.updated_at
            ],
            function (err) {

                if (err)
                    reject(err);

                else
                    resolve(this.lastID);

            }
        );

    });
};

exports.update = (id, note) => {
    return new Promise((resolve, reject) => {

        const sql = `
            UPDATE notes
            SET
                header=?,
                content=?,
                updated_at=?
            WHERE id=?
        `;

        db.run(
            sql,
            [
                note.header,
                note.content,
                note.updated_at,
                id
            ],
            function (err) {

                if (err)
                    reject(err);

                else
                    resolve(this.changes);

            }
        );

    });
};

exports.delete = (id) => {

    return new Promise((resolve, reject) => {

        db.run(
            "DELETE FROM notes WHERE id=?",
            [id],
            function (err) {

                if (err)
                    reject(err);

                else
                    resolve(this.changes);

            }
        );

    });

};