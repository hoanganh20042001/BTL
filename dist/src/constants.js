"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_NOTIFICATION = exports.PRODUCT_STATUS = exports.OTP = void 0;
exports.OTP = {
    REGENERATE_OTP_TIME: 300
};
var PRODUCT_STATUS;
(function (PRODUCT_STATUS) {
    PRODUCT_STATUS["AVAILABLE"] = "AVAILABLE";
    PRODUCT_STATUS["SOLDOUT"] = "SOLDOUT";
    PRODUCT_STATUS["ORDERED"] = "ORDERED";
    PRODUCT_STATUS["PAID"] = "PAID";
    PRODUCT_STATUS["DELIVERY"] = "DELIVERY";
})(PRODUCT_STATUS = exports.PRODUCT_STATUS || (exports.PRODUCT_STATUS = {}));
exports.PRODUCT_NOTIFICATION = {
    AVAILABLE: 'Đang còn',
    SOLOUT: 'Đã hết',
    ORDERED: 'Đã đặt hàng thành công',
    PAID: 'Đã thanh toán',
    DELIVERY: 'Đang giao hàng'
};
//# sourceMappingURL=constants.js.map