"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PERSON_DETAILS = void 0;
exports.SQL_PERSON_DETAILS = {
    DETAILS: "SELECT id_person,first_name,second_name,first_last_name,second_last_name,phone,date_birth,place_birth,address,occupation,type_document,document_number,place_expedition,gender,type_blood,status_civil,stratum,sisben,level_education,certificate,state_tuition,date_tuition_start,date_tuition_end,email,balance,reference_family,addres_reference,photo64,photo_fingerprint,photo_fingerprint64, \
    jsonb_object(array['idVehicle',veh.id_vehicle,'typeVehicle',veh.type_vehicle,'licensePlate',veh.license_plate,'expirationSoat',veh.expiration_soat,'expirationTecnomechanic',veh.expiration_tecnomechanic]::TEXT[]) AS vehicle, \
    jsonb_object(array['idCourse',cour.id_course,'typeCourse',cour.type_course,'price',cour.price]::TEXT[]) AS course \
    FROM person ps\
    INNER JOIN course cour ON cour.id_course = ps.id_course\
    INNER JOIN vehicle veh ON veh.id_vehicle = ps.id_vehicle\
    WHERE id_person = $1 "
};
