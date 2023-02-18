"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DeleteDAO_1 = __importDefault(require("../../dao/vehiclesDAO/DeleteDAO"));
const sql_delete_1 = require("../../repo/vehiclesRepository/sql_delete");
class VehicleControllerDelete extends DeleteDAO_1.default {
    deleteVehicles(req, res) {
        const id_vehicle = req.params.idVehicle;
        const parametro = [id_vehicle];
        VehicleControllerDelete.deleteById(sql_delete_1.SQL_VEHICLES_DELETE.DELETE, parametro, res);
    }
}
const vehicleControllerDelete = new VehicleControllerDelete();
exports.default = vehicleControllerDelete;
