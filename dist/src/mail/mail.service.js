"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendNewUser(obj, lang = 'en') {
        console.log(obj.name);
        await this.mailerService.sendMail({
            to: obj.emailTo,
            subject: obj.subject,
            template: `./new-user.${lang}.hbs`,
            context: {
                name: obj.name,
                code: obj.code,
                cccd: obj.cccd,
            },
        });
    }
    async sendNewPassword(obj, lang = 'en') {
        console.log(obj.name);
        await this.mailerService.sendMail({
            to: obj.emailTo,
            subject: obj.subject,
            template: `./forgot-pasword.${lang}.hbs`,
            context: {
                name: obj.name,
                code: obj.code,
                cccd: obj.cccd,
            },
        });
    }
    async paymentSuccessful(obj, lang = 'en') {
        console.log(obj.emailTo);
        await this.mailerService.sendMail({
            to: obj.emailTo,
            subject: obj.subject,
            template: `./payment-successful.${lang}.hbs`,
            context: {
                name: obj.name,
                cost: obj.cost,
                bankName: obj.bankName,
            },
        });
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map