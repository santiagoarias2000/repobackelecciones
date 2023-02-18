"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDAO_Login_1 = __importDefault(require("../../dao/userDAO/UserDAO_Login"));
const user_search_one_sql_1 = require("../../repo/userRepository/user_search_one_sql");
class UserController extends UserDAO_Login_1.default {
    findTheAccessUser(req, res) {
        const emailUser = req.body.emailUser;
        const password = req.body.passwordUser;
        //const passwordEncypted = encriptar.sha512(password.passwordUser);
        const parameter = [emailUser, password];
        UserController.findIdUserAccess(user_search_one_sql_1.SQL_USER_SEARCH_ONE.LOGIN, parameter, res);
    }
}
const userController = new UserController();
exports.default = userController;
