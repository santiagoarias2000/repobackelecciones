"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDAO_Update_1 = __importDefault(require("../../dao/userDAO/UserDAO_Update"));
const user_update_sql_1 = require("../../repo/userRepository/user_update_sql");
class UserController_Update extends UserDAO_Update_1.default {
    updateUser(req, res) {
        const idUser = req.body.idUser;
        const fullName = req.body.fullName;
        const emailUser = req.body.emailUser;
        const stateUser = req.body.stateUser;
        const passwordUser = req.body.passwordUser;
        const idProfile = req.body.idProfile;
        const dateUser = req.body.dateUser;
        const parametres = [idUser, fullName, emailUser, stateUser, idProfile, passwordUser, dateUser];
        UserController_Update.actualizarUser(user_update_sql_1.SQL_USER_UPDATE.UPDATE_CONFIRM, user_update_sql_1.SQL_USER_UPDATE.UPDATE, parametres, res);
    }
}
const userController_Update = new UserController_Update();
exports.default = userController_Update;
