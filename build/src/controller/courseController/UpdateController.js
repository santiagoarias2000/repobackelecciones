"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_update_1 = require("./../../repo/courseRepository/sql_update");
const UpdateDAO_1 = __importDefault(require("../../dao/courseDAO/UpdateDAO"));
class CourseControllerUpdate extends UpdateDAO_1.default {
    updateCourse(req, res) {
        const id_course = req.body.idCourse;
        const type_course = req.body.typeCourse;
        const price = req.body.price;
        const parameter = [id_course, type_course, price];
        CourseControllerUpdate.updateCourse(sql_update_1.SQL_COURSE_UPDATE.UPDATE, sql_update_1.SQL_COURSE_UPDATE.CONFIRMCOURSE, parameter, res);
    }
}
const courseControllerUpdate = new CourseControllerUpdate();
exports.default = courseControllerUpdate;
