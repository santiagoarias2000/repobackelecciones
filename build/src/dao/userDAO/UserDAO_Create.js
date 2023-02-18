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
class UserDAO_Create {
    static crearUser(sqlConfirm, sqlCreate, parametres, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default.task((consult) => __awaiter(this, void 0, void 0, function* () {
                const dato = yield consult.one(sqlConfirm, parametres);
                if (dato.amount == 0) {
                    return yield consult.one(sqlCreate, parametres);
                }
                else {
                    return { id_user: 0 };
                }
            }))
                .then((answer) => {
                if (answer.id_user != 0) {
                    res.status(200).json({ answer: 'Usuario Creado', nuevoCodigo: answer.id_user });
                }
                else {
                    console.log(answer);
                    res.status(402).json({ error: 'Error creando registro, probablmente este repetido' });
                }
            })
                .catch((mierror) => {
                console.log(mierror);
                res.status(400).json({ error: 'Error en las consults ', mierror });
            });
        });
    }
}
exports.default = UserDAO_Create;
