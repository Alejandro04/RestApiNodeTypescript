"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', (req, res) => res.send('Hello'));
    }
}
const indexRouter = new IndexRouter();
indexRouter.routes();
exports.default = indexRouter.router;
