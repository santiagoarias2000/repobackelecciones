"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_USER_CREATE = void 0;
exports.SQL_USER_CREATE = {
    CREATE: 'INSERT INTO users(full_name,email_user,state_user,id_profile,password_user,date_user)\
    VALUES($1,$2,$3,$4,MD5($5),$6)\
    RETURNING id_user',
    CONFIRM: 'SELECT COUNT(id_user) as Amount FROM users u\
    WHERE u.email_user = lower($2)'
};
