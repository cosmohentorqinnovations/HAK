import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HAK Cloud API is running!");
});

app.listen(5000, () => console.log("Server running on port 5000"));
