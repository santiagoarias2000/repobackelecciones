"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_create_1 = require("./../../repo/courseRepository/sql_create");
const CreateDAO_1 = __importDefault(require("../../dao/courseDAO/CreateDAO"));
class CourseControllerCreate extends CreateDAO_1.default {
    createMeCourse(req, res) {
        const type_course = req.body.typeCourse;
        const price = req.body.price;
        const parameter = [type_course, price];
        CourseControllerCreate.createCourse(sql_create_1.SQL_COURSE_CREATE.CREATE, sql_create_1.SQL_COURSE_CREATE.CONFIRMCOURSE, parameter, res);
    }
}
const courseControllerCreate = new CourseControllerCreate();
exports.default = courseControllerCreate;
