"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_delete_1 = require("./../../repo/courseRepository/sql_delete");
const DeleteDAO_1 = __importDefault(require("../../dao/courseDAO/DeleteDAO"));
class CourseControllerDelete extends DeleteDAO_1.default {
    deleteCourse(req, res) {
        const id_course = req.params.idCourse;
        const parametro = [id_course];
        CourseControllerDelete.deleteById(sql_delete_1.SQL_COURSE_DELETE.DELETE, parametro, res);
    }
}
const courseControllerDelete = new CourseControllerDelete();
exports.default = courseControllerDelete;
