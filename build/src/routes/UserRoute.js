"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_Create_1 = __importDefault(require("../controller/userController/UserController_Create"));
const UserController_Delete_1 = __importDefault(require("../controller/userController/UserController_Delete"));
const UserController_List_1 = __importDefault(require("../controller/userController/UserController_List"));
const UserController_Search_1 = __importDefault(require("../controller/userController/UserController_Search"));
const UserController_Update_1 = __importDefault(require("../controller/userController/UserController_Update"));
class UserRoutes {
    constructor() {
        this.routesApiUser = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiUser.get("/list", UserController_List_1.default.giveMeUsersList);
        this.routesApiUser.get("/one/:idUser", UserController_Search_1.default.searchUser);
        this.routesApiUser.post("/create", UserController_Create_1.default.createUser);
        this.routesApiUser.put("/update/:idUser", UserController_Update_1.default.updateUser);
        this.routesApiUser.delete("/delete/:idUser", UserController_Delete_1.default.deleteUser);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.routesApiUser;
