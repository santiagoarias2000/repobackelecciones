"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateController_1 = __importDefault(require("../controller/courseController/CreateController"));
const DeleteController_1 = __importDefault(require("../controller/courseController/DeleteController"));
const DetailsController_1 = __importDefault(require("../controller/courseController/DetailsController"));
const ToListController_1 = __importDefault(require("../controller/courseController/ToListController"));
const UpdateController_1 = __importDefault(require("../controller/courseController/UpdateController"));
class CourseRoutes {
    constructor() {
        this.routesApiCourses = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiCourses.get("/view", ToListController_1.default.getMeCourse);
        this.routesApiCourses.post("/create", CreateController_1.default.createMeCourse);
        this.routesApiCourses.get("/details/:idCourse", DetailsController_1.default.DetailsOne);
        this.routesApiCourses.delete("/delete/:idCourse", DeleteController_1.default.deleteCourse);
        this.routesApiCourses.put("/update/:idCourse", UpdateController_1.default.updateCourse);
    }
}
const courseRoutes = new CourseRoutes();
exports.default = courseRoutes.routesApiCourses;
