"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAuditCi = void 0;
const audit_1 = __importDefault(require("./audit"));
const audit_ci_version_1 = require("./audit-ci-version");
const colors_1 = require("./colors");
const config_1 = require("./config");
async function runAuditCi() {
    const auditCiConfig = await (0, config_1.runYargs)();
    const { "package-manager": packageManager, "output-format": outputFormat } = auditCiConfig;
    (0, audit_ci_version_1.printAuditCiVersion)(outputFormat);
    try {
        await (0, audit_1.default)(auditCiConfig);
        if (outputFormat === "text") {
            console.log(colors_1.green, `Passed ${packageManager} security audit.`);
        }
    }
    catch (error) {
        if (outputFormat === "text") {
            const message = error.message || error;
            console.error(colors_1.red, message);
            console.error(colors_1.red, "Exiting...");
        }
        process.exitCode = 1;
    }
}
exports.runAuditCi = runAuditCi;
//# sourceMappingURL=audit-ci.js.map