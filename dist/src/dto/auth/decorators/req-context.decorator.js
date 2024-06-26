"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqContext = void 0;
const common_1 = require("@nestjs/common");
const _1 = require(".");
exports.ReqContext = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return (0, _1.createRequestContext)(request);
});
//# sourceMappingURL=req-context.decorator.js.map