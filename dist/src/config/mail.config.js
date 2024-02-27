"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMailConfig() {
    return {
        mail: {
            transport: {
                host: process.env.MAIL_HOST,
                secure: false,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD,
                },
            },
            defaults: {
                from: `"CỬA HÀNG BÁN ĐỒNG HỒ MTALOCK" <${process.env.MAIL_FROM}>`,
            },
        }
    };
}
exports.default = () => {
    return getMailConfig();
};
//# sourceMappingURL=mail.config.js.map