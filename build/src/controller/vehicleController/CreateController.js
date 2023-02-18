"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_create_1 = require("../../repo/vehiclesRepository/sql_create");
const CreateDAO_1 = __importDefault(require("../../dao/vehiclesDAO/CreateDAO"));
class VehicleControllerCreate extends CreateDAO_1.default {
    createMeVehicle(req, res) {
        const type_vehicle = req.body.typeVehicle;
        const license_plate = req.body.licensePlate;
        const expiration_soat = req.body.expirationSoat;
        const expiration_tecnomechanic = req.body.expirationTecnomechanic;
        const parameter = [type_vehicle, license_plate, expiration_soat, expiration_tecnomechanic];
        VehicleControllerCreate.createVehicle(sql_create_1.SQL_VEHICLE_CREATE.CREATE, sql_create_1.SQL_VEHICLE_CREATE.CONFIRMARVEHICLE, parameter, res);
    }
}
const vehicleControllerCreate = new VehicleControllerCreate();
exports.default = vehicleControllerCreate;
