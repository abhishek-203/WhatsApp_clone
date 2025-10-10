import express from "express";
import Connection from "./database/db.js";
import Route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); // this is use for url when we use space in the url like facebook.com?query= "code for interview " in that case it genrente some code for the spaces like code%43for%90interview
app.use("/", Route);

Connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully ${PORT}`));
