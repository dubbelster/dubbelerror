"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var errRes = index_1.default(404, 'Not found');
console.log(errRes);
// Output: { status: 404, message: 'Not found' }
