"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateController_1 = __importDefault(require("../controller/personController/CreateController"));
const DeleteController_1 = __importDefault(require("../controller/personController/DeleteController"));
const DetailsController_1 = __importDefault(require("../controller/personController/DetailsController"));
const FilterController_1 = __importDefault(require("../controller/personController/FilterController"));
const ToListController_1 = __importDefault(require("../controller/personController/ToListController"));
const ToListEXCELController_1 = __importDefault(require("../controller/personController/ToListEXCELController"));
const UpdateController_1 = __importDefault(require("../controller/personController/UpdateController"));
class PersonRoutes {
    constructor() {
        this.routesApiPerson = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiPerson.get("/view", ToListController_1.default.getMePerson);
        this.routesApiPerson.post("/create", CreateController_1.default.createMePerson);
        this.routesApiPerson.get("/details/:idPerson", DetailsController_1.default.DetailsOne);
        this.routesApiPerson.get("/detailsEXCEL", ToListEXCELController_1.default.getMePerson);
        this.routesApiPerson.get("/detailsCertificateEXCEL", ToListEXCELController_1.default.filterPersonCertificateEXCEL);
        this.routesApiPerson.get("/detailsNoCertificateEXCEL", ToListEXCELController_1.default.filterPersonNoCertificateEXCEL);
        this.routesApiPerson.get("/filtercertificate", FilterController_1.default.filterPersonCertificate);
        this.routesApiPerson.get("/filternocertificate", FilterController_1.default.filterPersonNoCertificate);
        this.routesApiPerson.delete("/delete/:idPerson", DeleteController_1.default.deletePerson);
        this.routesApiPerson.put("/update/:idPerson", UpdateController_1.default.updatePerson);
        //falta colocar el id
        // this.routesApiPerson.get( "/pdf",personControllerDetails.createPDF  );
    }
}
const personRoutes = new PersonRoutes();
exports.default = personRoutes.routesApiPerson;
