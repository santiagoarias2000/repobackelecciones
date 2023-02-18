"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/personRepository/sql_toList");
const ToListDAO_1 = __importDefault(require("../../dao/personDAO/ToListDAO"));
class PersonControllerGet extends ToListDAO_1.default {
    getMePerson(req, res) {
        PersonControllerGet.getPerson(sql_toList_1.SQL_PERSON_VIEW.VIEW, [], res);
    }
}
const personControllerGet = new PersonControllerGet();
exports.default = personControllerGet;
