"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_role_1 = require("./../../repo/roleRepository/sql_role");
const ToList_1 = __importDefault(require("../../dao/rolesDAO/ToList"));
class RolesControllerGet extends ToList_1.default {
    getMeRoles(req, res) {
        RolesControllerGet.getRoles(sql_role_1.SQL_ROLE_VIEW.VIEW, [], res);
    }
}
const rolesControllerGet = new RolesControllerGet();
exports.default = rolesControllerGet;
