"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_filterCertificate_1 = require("./../../repo/personRepository/sql_filterCertificate");
const FilterDAO_1 = __importDefault(require("../../dao/personDAO/FilterDAO"));
class PersonControllerFilter extends FilterDAO_1.default {
    filterPersonCertificate(req, res) {
        PersonControllerFilter.getPerson(sql_filterCertificate_1.SQL_PERSON_FILTER.FILTERCERTIFICATE, [], res);
    }
    filterPersonNoCertificate(req, res) {
        PersonControllerFilter.getPerson(sql_filterCertificate_1.SQL_PERSON_FILTER.FILTERNOCERTIFICATE, [], res);
    }
}
const personControllerFilterC = new PersonControllerFilter();
exports.default = personControllerFilterC;
