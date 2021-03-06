"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./database");
const router_1 = __importDefault(require("./router"));
const app = express_1.default();
app.use(cors_1.default({ origin: process.env.APP_URL || "http://localhost:3000" }));
app.use(express_1.default.json());
app.use(router_1.default);
app.listen(process.env.PORT || 3333);
