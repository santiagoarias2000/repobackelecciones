"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_VEHICLES_DETAILS = void 0;
exports.SQL_VEHICLES_DETAILS = {
    DETAILS: 'SELECT id_vehicle, type_vehicle,license_plate,expiration_soat ,expiration_tecnomechanic  FROM vehicle WHERE id_vehicle = $1',
};
