"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_details_1 = require("./../../repo/courseRepository/sql_details");
const DetailsDAO_1 = __importDefault(require("../../dao/courseDAO/DetailsDAO"));
class CourseControllerDetails extends DetailsDAO_1.default {
    DetailsOne(req, res) {
        const id_course = req.params.idCourse;
        const parametro = [id_course];
        CourseControllerDetails.detailsById(sql_details_1.SQL_COURSE_DETAILS.DETAILS, parametro, res);
    }
    DetailsOneUpdate(req, res) {
        const id_course = req.params.idCourse;
        const parametro = [id_course];
        CourseControllerDetails.detailsById(sql_details_1.SQL_COURSE_DETAILS.DETAILSUPPDATE, parametro, res);
    }
}
const courseControllerDetails = new CourseControllerDetails();
exports.default = courseControllerDetails;
