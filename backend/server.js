const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const noteRoutes = require("./routes/notes");

app.use("/notes", noteRoutes);

const PORT = 3000;

app.listen(PORT, () => {

    console.log(`Server running : http://localhost:${PORT}`);

});