import express from "express";
import registerRouter from "./routers/register.js";
import db from "./db/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server Up!");
});

app.use('/register', registerRouter);

app.use((req, res) => {
    res.status(404).send("You are asking for something I don't have :(")
});

app.listen(PORT, () => {
    console.log(`App is running and listening on port ${PORT}.`);
    db.initialize();
});