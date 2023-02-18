"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionDB_1 = __importDefault(require("../../config/connection/connectionDB"));
class PersonToListPDF {
    static getPerson(sqlPDF, parameter, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDB_1.default.result(sqlPDF, parameter)
                .then((result) => {
                let excel;
                excel = [];
                result.rows.map((saveResult) => {
                    excel.push({ Id: saveResult.id, PRIMER_NOMBRE: saveResult.primerNombre, SEGUNDO_NOMBRE: saveResult.segundoNombre, PRIMER_APELLIDO: saveResult.primerApellido, SEGUNDO_APELLIDO: saveResult.segundoApellido, TELEFONO: saveResult.telefono, FECHA_NACIMIENTO: saveResult.fechaNacimiento, LUGAR_NACIMIENTO: saveResult.lugarNacimiento, DIRECCION: saveResult.direccion, OCUPACION: saveResult.ocupacion, TIPO_DOCUMENTO: saveResult.tipoDocumento, NUMERO_DOCUMENTO: saveResult.numeroDocumento, LUGAR_EXPEDICION: saveResult.lugarExpedicion, GENERO: saveResult.genero, RH: saveResult.tipoSangre, ESTADO_CIVIL: saveResult.estadoCivil, SISBEN: saveResult.sisben, NIVEL_EDUCACION: saveResult.nivelEducacion, ESTADO_CERTIFICADO: saveResult.certificado, ESTADO_MATRICULA: saveResult.estadoMatricula, FECHA_INICIO: saveResult.fechaInicio, FECHA_FIN: saveResult.fechaFin, CORREO: saveResult.correo, ABONO: saveResult.abono, REFERENCIA_FAMILIAR: saveResult.referenciaFamiliar, DIRECCION_REFERENCIA: saveResult.direccionReferencia, TIPO_VEHICULO: saveResult.tipoVehiculo, PLACA: saveResult.placa, EXPIRACION_SOAT: saveResult.expiracionSoat, EXPIRACION_TECNICOMECANICA: saveResult.expiracionTecnicomecanica, TIPO_CURSO: saveResult.tipoCurso, PRECIO: saveResult.precio });
                });
                res.status(200).json(excel);
            })
                .catch((myErr) => {
                console.log('Error in daos: ', myErr);
                res.status(400).json({ respuesta: 'No esta trabajando el daos en el ToList de persona' });
            });
        });
    }
}
exports.default = PersonToListPDF;
