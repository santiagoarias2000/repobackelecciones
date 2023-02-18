"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_details_1 = require("./../../repo/personRepository/sql_details");
const DetailsDAO_1 = __importDefault(require("../../dao/personDAO/DetailsDAO"));
class PersonControllerDetails extends DetailsDAO_1.default {
    DetailsOne(req, res) {
        const id_person = req.params.idPerson;
        const parametro = [id_person];
        PersonControllerDetails.detailsById(sql_details_1.SQL_PERSON_DETAILS.DETAILS, parametro, res);
    }
}
const personControllerDetails = new PersonControllerDetails();
exports.default = personControllerDetails;
