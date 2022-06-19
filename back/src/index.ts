import express, { json } from "express";
import cors from "cors";
import routes from "./routes";

const PORT = 5050;
const app = express();

app.use(json());
app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
