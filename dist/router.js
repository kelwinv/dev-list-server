"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const routes = express_1.default.Router();
routes.get("/users", UserController_1.default.index);
routes.get("/users/:id", UserController_1.default.show);
routes.post("/users", UserController_1.default.create);
exports.default = routes;
