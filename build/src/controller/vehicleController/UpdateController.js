"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_update_1 = require("./../../repo/vehiclesRepository/sql_update");
const UpdateDAO_1 = __importDefault(require("../../dao/vehiclesDAO/UpdateDAO"));
class VehicleControllerUpdate extends UpdateDAO_1.default {
    updateVehicle(req, res) {
        const id_vehicle = req.body.idVehicle;
        const type_vehicle = req.body.typeVehicle;
        const license_plate = req.body.licensePlate;
        const expiration_soat = req.body.expirationSoat;
        const expiration_tecnomechanic = req.body.expirationTecnomechanic;
        const parameter = [
            id_vehicle,
            type_vehicle,
            license_plate,
            expiration_soat,
            expiration_tecnomechanic,
        ];
        VehicleControllerUpdate.updateVehicle(sql_update_1.SQL_VEHICLES_UPDATE.UPDATE, sql_update_1.SQL_VEHICLES_UPDATE.CONFIRMARVEHICLE, parameter, res);
    }
}
const vehicleControllerUpdate = new VehicleControllerUpdate();
exports.default = vehicleControllerUpdate;
