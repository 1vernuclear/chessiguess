"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
const port = 3000;
server.get('/', (req, res) => {
    res.send('Hello World!');
});
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
console.log('Hello madafaka');
