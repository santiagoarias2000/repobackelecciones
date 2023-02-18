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
class UserDAO_Update {
    static actualizarUser(sqlConfirmar, sqlActualizarYa, parametros, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default.task((consulta) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consulta.one(sqlConfirmar, parametros);
                if (dato.amount == 0) {
                    return yield consulta.one(sqlActualizarYa, parametros);
                }
                else {
                    return { id_user: 0 };
                }
            }))
                .then((respuesta) => {
                if (respuesta.id_user != 0) {
                    res.status(200).json({ OK: 'Usuario Creado' });
                }
                else {
                    console.log(respuesta);
                    res.status(402).json({ err: 'Error creando registro, probablmente este el email repetido' });
                }
            })
                .catch((mierror) => {
                console.log(mierror);
                res.status(400).json({ info: 'Error en las consultas ', mierror });
            });
        });
    }
}
exports.default = UserDAO_Update;
