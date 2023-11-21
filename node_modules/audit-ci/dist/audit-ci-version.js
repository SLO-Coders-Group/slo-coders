"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printAuditCiVersion = exports.auditCiVersion = void 0;
// Ignoring importing package.json because that changes the package's build
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("../package.json");
exports.auditCiVersion = version;
function printAuditCiVersion(outputFormat) {
    if (outputFormat === "text") {
        console.log(`audit-ci version: ${exports.auditCiVersion}`);
    }
}
exports.printAuditCiVersion = printAuditCiVersion;
//# sourceMappingURL=audit-ci-version.js.map