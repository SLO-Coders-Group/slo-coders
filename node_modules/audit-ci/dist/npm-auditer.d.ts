import type { NPMAuditReportV1, NPMAuditReportV2 } from "audit-types";
import { reportAudit } from "./common";
import type { AuditCiConfig } from "./config";
export declare function isV2Audit(parsedOutput: NPMAuditReportV1.Audit | NPMAuditReportV2.Audit): parsedOutput is NPMAuditReportV2.Audit;
export declare function report(parsedOutput: any, config: AuditCiConfig, reporter: any): any;
/**
 * Audit your NPM project!
 *
 * @returns Returns the audit report summary on resolve, `Error` on rejection.
 */
export declare function audit(config: AuditCiConfig, reporter?: typeof reportAudit): Promise<any>;
//# sourceMappingURL=npm-auditer.d.ts.map