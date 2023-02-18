"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_COURSE_DETAILS = void 0;
exports.SQL_COURSE_DETAILS = {
    DETAILS: 'SELECT id_course, type_course,price  \
    FROM course \
    WHERE id_course = $1',
    DETAILSUPPDATE: "SELECT id_course, type_course,price\
    FROM course \
    WHERE id_course = $1"
};
