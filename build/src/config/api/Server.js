"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const PersonRoute_1 = __importDefault(require("../../routes/PersonRoute"));
const RoleRoute_1 = __importDefault(require("../../routes/RoleRoute"));
const UserRoute_1 = __importDefault(require("../../routes/UserRoute"));
const VehicleRoute_1 = __importDefault(require("../../routes/VehicleRoute"));
const UserAccessRoute_1 = __importDefault(require("../../routes/UserAccessRoute"));
const CourseRoute_1 = __importDefault(require("../../routes/CourseRoute"));
const Safety_1 = __importDefault(require("../../middleware/Safety"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startSetting();
        this.activeRoute();
    }
    startSetting() {
        this.app.set("PORT", 3123);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activeRoute() {
        this.app.use('/api/public', UserAccessRoute_1.default);
        this.app.use('/api/private/person', PersonRoute_1.default);
        this.app.use('/api/private/course', Safety_1.default.verificarToken, CourseRoute_1.default);
        this.app.use('/api/private/roles', Safety_1.default.verificarToken, RoleRoute_1.default);
        this.app.use('/api/public/user', UserAccessRoute_1.default);
        this.app.use('/api/private/user', Safety_1.default.verificarToken, UserRoute_1.default);
        this.app.use('/api/private/vehicle', Safety_1.default.verificarToken, VehicleRoute_1.default);
    }
    start() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("It works", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
