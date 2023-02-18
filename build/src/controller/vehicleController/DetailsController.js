"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DetailsDAO_1 = __importDefault(require("../../dao/vehiclesDAO/DetailsDAO"));
const sql_details_1 = require("../../repo/vehiclesRepository/sql_details");
class VehicleControllerDetails extends DetailsDAO_1.default {
    DetailsOne(req, res) {
        const id_vehicle = req.params.idVehicle;
        const parametro = [id_vehicle];
        VehicleControllerDetails.detailsById(sql_details_1.SQL_VEHICLES_DETAILS.DETAILS, parametro, res);
    }
}
const vehicleControllerDetails = new VehicleControllerDetails();
exports.default = vehicleControllerDetails;
