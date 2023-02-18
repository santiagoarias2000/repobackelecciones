"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_COURSE_UPDATE = void 0;
exports.SQL_COURSE_UPDATE = {
    UPDATE: "UPDATE course SET  type_course=$2, price=$3 \
    WHERE id_course=$1 \
    RETURNING id_course",
    CONFIRMCOURSE: "SELECT COUNT(id_course) AS amount\
    FROM course \
    WHERE type_course=$2 AND id_course <> $1",
};
