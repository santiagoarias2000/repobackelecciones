"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_create_1 = require("./../../repo/personRepository/sql_create");
const CreateDAO_1 = __importDefault(require("../../dao/personDAO/CreateDAO"));
class PersonControllerCreate extends CreateDAO_1.default {
    createMePerson(req, res) {
        const first_name = req.body.firstName;
        const second_name = req.body.secondName;
        const first_last_name = req.body.firstLastName;
        const second_last_name = req.body.secondLastName;
        const phone = req.body.phone;
        const date_birth = req.body.dateBirth;
        const place_birth = req.body.placeBirth;
        const address = req.body.address;
        const occupation = req.body.occupation;
        const type_document = req.body.typeDocument;
        const document_number = req.body.documentNumber;
        const place_expedition = req.body.placeExpedition;
        const gender = req.body.gender;
        const type_blood = req.body.typeBlood;
        const status_civil = req.body.statusCivil;
        const stratum = req.body.stratum;
        const sisben = req.body.sisben;
        const level_education = req.body.levelEducation;
        const certificate = req.body.certificate;
        const state_tuition = req.body.stateTuition;
        const date_tuition_start = req.body.dateTuitionStart;
        const date_tuition_end = req.body.dateTuitionEnd;
        const email = req.body.email;
        const balance = req.body.balance;
        const reference_family = req.body.referenceFamily;
        const addres_reference = req.body.addresReference;
        const photo64 = req.body.photo64;
        const photo_fingerprint = req.body.photoFingerprint;
        const photo_fingerprint64 = req.body.photoFingerprint64;
        const id_vehicle = req.body.vehicle;
        const id_course = req.body.course;
        const parameter = [
            first_name,
            second_name,
            first_last_name,
            second_last_name,
            phone,
            date_birth,
            place_birth,
            address,
            occupation,
            type_document,
            document_number,
            place_expedition,
            gender,
            type_blood,
            status_civil,
            stratum,
            sisben,
            level_education,
            certificate,
            state_tuition,
            date_tuition_start,
            date_tuition_end,
            email,
            balance,
            reference_family,
            addres_reference,
            photo64,
            photo_fingerprint,
            photo_fingerprint64,
            id_vehicle,
            id_course,
        ];
        PersonControllerCreate.createPerson(sql_create_1.SQL_PERSON_CREATE.CONFRIMPERSON, sql_create_1.SQL_PERSON_CREATE.CREATEPERSON, parameter, res);
    }
}
const personControllerCreate = new PersonControllerCreate();
exports.default = personControllerCreate;
