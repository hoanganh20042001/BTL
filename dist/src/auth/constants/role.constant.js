"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SYSTEM_ADMIN = exports.STRATEGY_JWT_REFRESH = exports.STRATEGY_JWT_AUTH = exports.VALIDATION_PIPE_OPTIONS = exports.FORWARDED_FOR_TOKEN_HEADER = exports.REQUEST_ID_TOKEN_HEADER = exports.ROLE_GUARD = exports.ROLES = exports.ROLE = void 0;
var ROLE;
(function (ROLE) {
    ROLE["USER"] = "USER";
    ROLE["STAFF"] = "STAFF";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
var ROLES;
(function (ROLES) {
})(ROLES = exports.ROLES || (exports.ROLES = {}));
exports.ROLE_GUARD = {};
exports.REQUEST_ID_TOKEN_HEADER = 'x-request-id';
exports.FORWARDED_FOR_TOKEN_HEADER = 'x-forwarded-for';
exports.VALIDATION_PIPE_OPTIONS = { transform: true, whitelist: true };
exports.STRATEGY_JWT_AUTH = 'jwt';
exports.STRATEGY_JWT_REFRESH = 'jwt-refresh';
exports.SYSTEM_ADMIN = 'SYSTEM_ADMIN';
//# sourceMappingURL=role.constant.js.map