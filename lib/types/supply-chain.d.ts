/**
 * Supply chain and DSH plugin permission static inspection.
 * Zero-quota inspection using GitHub Raw CDN.
 */
import type { GitHubClient } from './github-client.js';
import type { SupplyChainAuditResult } from './types.js';
export interface SupplyChainEvaluation {
    result: SupplyChainAuditResult;
    scoreDeduction: number;
    forceGradeF: boolean;
    criticalVerdict?: string;
}
export declare function auditSupplyChain(client: GitHubClient, owner: string, repo: string, defaultBranch?: string, signal?: AbortSignal): Promise<SupplyChainEvaluation>;
