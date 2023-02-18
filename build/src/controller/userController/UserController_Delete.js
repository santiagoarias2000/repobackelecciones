"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDAO_Delete_1 = __importDefault(require("../../dao/userDAO/UserDAO_Delete"));
const user_delete_sql_1 = require("../../repo/userRepository/user_delete_sql");
class UserController_Delete extends UserDAO_Delete_1.default {
    deleteUser(req, res) {
        const idUser = req.params.idUser;
        const parametro = [idUser];
        UserController_Delete.deleteUserById(user_delete_sql_1.SQL_USER_DELETE.DELETE, parametro, res);
    }
}
const userController_Delete = new UserController_Delete();
exports.default = userController_Delete;
