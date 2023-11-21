import type { GitHubAdvisoryId, NPMAuditReportV1, NPMAuditReportV2, PNPMAuditReport, YarnAudit } from "audit-types";
import Allowlist from "./allowlist";
import type { AuditCiConfig } from "./config";
import type { VulnerabilityLevels } from "./map-vulnerability";
export interface Summary {
    advisoriesFound: GitHubAdvisoryId[];
    failedLevelsFound: string[];
    allowlistedAdvisoriesNotFound: string[];
    allowlistedModulesNotFound: string[];
    allowlistedPathsNotFound: string[];
    allowlistedAdvisoriesFound: GitHubAdvisoryId[];
    allowlistedModulesFound: string[];
    allowlistedPathsFound: string[];
    advisoryPathsFound: string[];
}
interface ProcessedAdvisory {
    id: number;
    github_advisory_id: GitHubAdvisoryId;
    severity: string;
    module_name: string;
    url: string;
    findings: {
        paths: string[];
    }[];
}
declare class Model {
    failingSeverities: {
        [K in keyof VulnerabilityLevels]: VulnerabilityLevels[K];
    };
    allowlist: Allowlist;
    allowlistedModulesFound: string[];
    allowlistedAdvisoriesFound: GitHubAdvisoryId[];
    allowlistedPathsFound: string[];
    advisoriesFound: ProcessedAdvisory[];
    advisoryPathsFound: string[];
    constructor(config: Pick<AuditCiConfig, "allowlist" | "levels">);
    process(advisory: ProcessedAdvisory): void;
    load(parsedOutput: NPMAuditReportV2.Audit | NPMAuditReportV1.Audit | YarnAudit.AuditAdvisory | PNPMAuditReport.Audit): Summary;
    getSummary(advisoryMapper?: (advisory: any) => GitHubAdvisoryId): Summary;
}
export default Model;
//# sourceMappingURL=model.d.ts.map