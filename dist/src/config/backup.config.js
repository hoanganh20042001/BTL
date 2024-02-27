"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBackupConfig = void 0;
const getBackupConfig = () => ({
    backup: {
        type: process.env.TYPEORM_TYPE || 'mysql',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 4406,
        database: process.env.DB_NAME || 'mydb',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '1',
        cache: true,
        keepConnectionAlive: false,
        logging: false,
        synchronize: false,
        ssl: null,
    },
});
exports.getBackupConfig = getBackupConfig;
//# sourceMappingURL=backup.config.js.map