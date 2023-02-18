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
const UserAccessAnswer_1 = __importDefault(require("../userAccessDAO/UserAccessAnswer"));
class UserDAO_Login {
    static findIdUserAccess(sqlSearch, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default.oneOrNone(sqlSearch, parameters)
                .then((result) => {
                return UserAccessAnswer_1.default.process(result, res);
            })
                .catch((error) => {
                console.log(error);
                return res.status(400).json({ miError: 'Error buscando el acceso' });
            });
        });
    }
}
exports.default = UserDAO_Login;
