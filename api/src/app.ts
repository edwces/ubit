import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

export const app = express();

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
