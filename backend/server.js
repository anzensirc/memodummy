const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const noteRoutes = require("./routes/notes");

// semua endpoint menjadi:
// http://ip:3000/api/notes
app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
    console.log(`Server running`);
    console.log(`Local   : http://localhost:${PORT}`);
    console.log(`Network : http://YOUR_IP:${PORT}`);
});