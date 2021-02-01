import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

import "./database";

import routes from "./router";

const app = express();

app.use(cors({ origin: process.env.APP_URL || "http://localhost:3000" }));
app.use(express.json());

app.use(routes);

app.listen(3333);
