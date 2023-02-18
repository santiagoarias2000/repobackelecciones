"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_create_sql_1 = require("./../../repo/userRepository/user_create_sql");
const UserDAO_Create_1 = __importDefault(require("../../dao/userDAO/UserDAO_Create"));
class UserController_Create extends UserDAO_Create_1.default {
    createUser(req, res) {
        const fullName = req.body.fullName;
        const emailUser = req.body.emailUser;
        const stateUser = req.body.stateUser;
        const idProfile = req.body.idProfile;
        const passwordUser = req.body.passwordUser;
        const dateUser = req.body.dateUser;
        const parametres = [fullName, emailUser, stateUser, idProfile, passwordUser, dateUser];
        UserController_Create.crearUser(user_create_sql_1.SQL_USER_CREATE.CONFIRM, user_create_sql_1.SQL_USER_CREATE.CREATE, parametres, res);
    }
}
const userController_Create = new UserController_Create();
exports.default = userController_Create;
