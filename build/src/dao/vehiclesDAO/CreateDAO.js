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
class VehicleCreate {
    static createVehicle(sqlCreate, sqlConfirm, parameter, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(parameter);
            yield connectionDB_1.default
                .task((consult) => __awaiter(this, void 0, void 0, function* () {
                //Aca vamos hacer las consultas
                const dato = yield consult.one(sqlConfirm, parameter);
                if (dato.amount == 0) {
                    return yield consult.one(sqlCreate, parameter);
                }
                else {
                    return { id_vehicle: 0 };
                }
            }))
                .then((response) => {
                if (response.id_vehicle != 0) {
                    res.status(200).json({ OK: 'Vehicle created SUCCESSFULLY', newCode: response.id_vehicle });
                }
                else {
                    res.status(402).json({ ERROR: 'Error create register it is repeated' });
                }
                ;
            })
                .catch((meErr) => {
                console.log('Error in daos: ', meErr);
                res.status(400).json({ answer: 'Error creating vehicle information.' });
            });
        });
    }
}
exports.default = VehicleCreate;
