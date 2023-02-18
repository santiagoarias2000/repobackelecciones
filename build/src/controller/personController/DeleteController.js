"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_delete_1 = require("./../../repo/personRepository/sql_delete");
const DeleteDAO_1 = __importDefault(require("../../dao/personDAO/DeleteDAO"));
class PersonControllerDelete extends DeleteDAO_1.default {
    deletePerson(req, res) {
        const id_person = req.params.idPerson;
        const parametro = [id_person];
        PersonControllerDelete.deleteById(sql_delete_1.SQL_PERSON_DELETE.DELETE, parametro, res);
    }
}
const personControllerDelete = new PersonControllerDelete();
exports.default = personControllerDelete;
