#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const audit_ci_1 = require("./audit-ci");
(0, audit_ci_1.runAuditCi)().catch((error) => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=bin.js.map