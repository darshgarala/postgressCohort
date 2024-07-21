"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function deleteTodo(todoId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, index_1.getClient)();
        const deleteTodoText = 'DELETE FROM todos WHERE id = $1';
        yield client.query(deleteTodoText, [todoId]);
        console.log(`Todo with ID ${todoId} deleted!`);
    });
}
const todoIdToDelete = 1;
deleteTodo(todoIdToDelete);
