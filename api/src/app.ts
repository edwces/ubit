import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

export const app = express();

app.use(cors());
app.use(bodyParser.json());
