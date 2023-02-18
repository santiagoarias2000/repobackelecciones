"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_search_one_sql_1 = require("./../../repo/userRepository/user_search_one_sql");
const UserDAO_FindOne_1 = __importDefault(require("../../dao/userDAO/UserDAO_FindOne"));
class UserController_Search extends UserDAO_FindOne_1.default {
    searchUser(req, res) {
        const idUser = req.params.idUser;
        const parametres = [idUser];
        UserController_Search.findUserById(user_search_one_sql_1.SQL_USER_SEARCH_ONE.FIND_ONE, parametres, res);
    }
}
const userController_Search = new UserController_Search();
exports.default = userController_Search;
