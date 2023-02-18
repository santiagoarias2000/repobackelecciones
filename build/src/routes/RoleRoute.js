"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ToListController_1 = __importDefault(require("../controller/rolesController/ToListController"));
class RolesRoutes {
    constructor() {
        this.routesApiRoles = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiRoles.get("/view", ToListController_1.default.getMeRoles);
    }
}
const rolesRoutes = new RolesRoutes();
exports.default = rolesRoutes.routesApiRoles;
