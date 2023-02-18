"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toListEXCEL_1 = require("../../repo/personRepository/sql_toListEXCEL");
const ToListExcelDAO_1 = __importDefault(require("../../dao/personDAO/ToListExcelDAO"));
class PersonControllerGetEXCEL extends ToListExcelDAO_1.default {
    getMePerson(req, res) {
        PersonControllerGetEXCEL.getPerson(sql_toListEXCEL_1.SQL_PERSON_VIEW.VIEW_EXCEL, [], res);
    }
    filterPersonCertificateEXCEL(req, res) {
        PersonControllerGetEXCEL.getPerson(sql_toListEXCEL_1.SQL_PERSON_VIEW.VIEW_CERTIFICADO, [], res);
    }
    filterPersonNoCertificateEXCEL(req, res) {
        PersonControllerGetEXCEL.getPerson(sql_toListEXCEL_1.SQL_PERSON_VIEW.VIEW_NO_CERTIFICADO, [], res);
    }
}
const personControllerGetEXCEL = new PersonControllerGetEXCEL;
exports.default = personControllerGetEXCEL;
