"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_1 = require("./../../repo/vehiclesRepository/sql_toList");
const ToList_1 = __importDefault(require("../../dao/vehiclesDAO/ToList"));
class VehicleControllerGet extends ToList_1.default {
    getMeVehicles(req, res) {
        VehicleControllerGet.getVehicles(sql_toList_1.SQL_VEHICLES_VIEW.VIEW, [], res);
    }
}
const vehicleControllerGet = new VehicleControllerGet();
exports.default = vehicleControllerGet;
