const express = require("express");
const cors = require("cors");

require("./config/database");

const noteRoutes = require("./routes/noteRoutes");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
    res.send("Memo API Running");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});