/// <reference types="node" />
import { GitHubAdvisoryId } from "audit-types";
import { SpawnOptionsWithoutStdio } from "child_process";
import { AuditCiConfig } from "./config";
import { Summary } from "./model";
export declare function partition<T>(a: T[], fun: (parameter: T) => boolean): {
    truthy: T[];
    falsy: T[];
};
export declare function reportAudit(summary: Summary, config: AuditCiConfig): Summary;
export declare function runProgram(command: string, arguments_: readonly string[], options: SpawnOptionsWithoutStdio, stdoutListener: any, stderrListener: any): Promise<void>;
export declare function matchString(template: string, string_: string): boolean;
export declare function isGitHubAdvisoryId(id: unknown): id is GitHubAdvisoryId;
export declare function gitHubAdvisoryUrlToAdvisoryId(url: string): GitHubAdvisoryId;
export declare function gitHubAdvisoryIdToUrl<T extends string>(id: T): `https://github.com/advisories/${T}`;
export declare function deduplicate(array: readonly string[]): string[];
//# sourceMappingURL=common.d.ts.map