"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_VEHICLE_CREATE = void 0;
exports.SQL_VEHICLE_CREATE = {
    CREATE: 'INSERT INTO vehicle(type_vehicle, license_plate, expiration_soat, expiration_tecnomechanic ) values($1, $2, $3,$4) \
    RETURNING id_vehicle',
    CONFIRMARVEHICLE: "SELECT COUNT(veh.id_vehicle) AS amount\
    FROM vehicle veh \
    WHERE lower(veh.license_plate)=lower($2)"
};
