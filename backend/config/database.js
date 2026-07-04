const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

// Lokasi folder database
const databaseDir = path.join(__dirname, "../database");

// Buat folder jika belum ada
if (!fs.existsSync(databaseDir)) {
    fs.mkdirSync(databaseDir, { recursive: true });
}

// Lokasi file database
const dbPath = path.join(databaseDir, "memo.db");

// Koneksi SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("SQLite connected.");

        db.run(`
            CREATE TABLE IF NOT EXISTS notes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                header TEXT,
                content TEXT NOT NULL,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            )
        `, (err) => {
            if (err) {
                console.error("Create table failed:", err.message);
            } else {
                console.log("Table 'notes' ready.");
            }
        });
    }
});

module.exports = db;