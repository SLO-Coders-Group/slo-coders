import type { PNPMAuditReport } from "audit-types";
import { reportAudit } from "./common";
import type { AuditCiConfig } from "./config";
import { type Summary } from "./model";
export declare function report(parsedOutput: PNPMAuditReport.Audit, config: AuditCiConfig, reporter: (summary: Summary, config: AuditCiConfig, audit?: PNPMAuditReport.Audit) => Summary): Summary;
/**
 * Audit your PNPM project!
 *
 * @returns Returns the audit report summary on resolve, `Error` on rejection.
 */
export declare function audit(config: AuditCiConfig, reporter?: typeof reportAudit): Promise<Summary>;
//# sourceMappingURL=pnpm-auditer.d.ts.map