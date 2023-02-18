"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDAO_List_1 = __importDefault(require("../../dao/userDAO/UserDAO_List"));
const user_list_sql_1 = require("../../repo/userRepository/user_list_sql");
class UserController_List extends UserDAO_List_1.default {
    giveMeUsersList(req, res) {
        UserController_List.giveMeAllUsers(user_list_sql_1.SQL_USER_LIST.LIST, [], res);
    }
}
const userController_List = new UserController_List();
exports.default = userController_List;
