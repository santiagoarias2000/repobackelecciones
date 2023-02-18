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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionDB_1 = __importDefault(require("../../config/connection/connectionDB"));
class PersonCreate {
    static createPerson(sqlConfirm, sqlCreate, parameter, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(parameter);
            yield connectionDB_1.default
                .task((consult) => __awaiter(this, void 0, void 0, function* () {
                //Aca vamos hacer las consults
                const data = yield consult.one(sqlConfirm, parameter);
                if (data.amount == 0) {
                    return yield consult.one(sqlCreate, parameter);
                }
                else {
                    return { id_person: 0 };
                }
            }))
                .then((answer) => {
                //Aca va si todo esta bien
                if (answer.id_person != 0) {
                    res.status(200).json({ ok: 'Person created', newCode: answer.id_person });
                }
                else {
                    res.status(402).json({ err: 'Error, numero de cedula de la person ya Esta creado', newCode: answer.id_person });
                }
            })
                .catch((miError) => {
                console.log('Error, consult no se realizo con exito', miError);
                res.status(400).json({ answers: 'Error en la consult' });
            });
        });
    }
}
exports.default = PersonCreate;
