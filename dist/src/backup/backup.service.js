"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const child_process_1 = require("child_process");
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
const path = __importStar(require("path"));
const util = __importStar(require("util"));
const execAsync = util.promisify(child_process_1.exec);
let BackupService = class BackupService {
    constructor() {
        this.backupDir = path.join(__dirname, '..', '..', '..', 'src', 'databasesBackup');
        fs.mkdirSync(this.backupDir, { recursive: true });
    }
    async createBackup() {
        try {
            const today = (0, moment_1.default)().format('YYYY-MM-DD');
            const backupFilePath = path.join(this.backupDir, today + '.sql');
            const databaseName = process.env.DB_NAME || 'mydb';
            const dbUser = process.env.DB_USER || 'root';
            const dbPassword = process.env.DB_PASS || '1';
            const dbHost = process.env.DB_HOST || 'localhost';
            const dbPort = process.env.DB_PORT || '4406';
            const dbContainer = process.env.DB_CONTAINER || 'mysql_master';
            const command = `docker exec ${dbContainer} mysqldump -u ${dbUser} -p${dbPassword} -h ${dbHost} -P ${dbPort} ${databaseName} > ${backupFilePath}`;
            await execAsync(command);
            console.log(`Backup successfully created at ${backupFilePath}`);
        }
        catch (error) {
            console.error('Error occurred during backup:', error);
        }
    }
};
__decorate([
    (0, schedule_1.Cron)('0 0 * * *', { timeZone: 'Asia/Ho_Chi_Minh' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BackupService.prototype, "createBackup", null);
BackupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BackupService);
exports.BackupService = BackupService;
//# sourceMappingURL=backup.service.js.map