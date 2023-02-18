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
class PersonUpdate {
    static updatePerson(sqlConfirm, sqlUpdate, paramentros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default.task((consult) => __awaiter(this, void 0, void 0, function* () {
                //Aca vamos hacer las consults
                const dato = yield consult.one(sqlConfirm, paramentros);
                if (dato.amount == 0) {
                    return yield consult.one(sqlUpdate, paramentros);
                }
                else {
                    return { id_person: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.id_person != 0) {
                    console.log(respuesta);
                    res.status(200).json({ ok: 'Usuario actualizado' });
                }
                else {
                    console.log(respuesta);
                    res.status(402).json({ err: 'Error, no es posible actualizar el usuario. El numero de documento del usuario ya esta asociado' });
                }
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ help: 'Error en actualizar usuario' });
            });
        });
    }
}
exports.default = PersonUpdate;
