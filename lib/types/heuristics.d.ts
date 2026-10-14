/**
 * Heuristic algorithms inspired by CMU Paper (arXiv:2412.13459).
 */
import type { GitHubRepoMetadata, GitHubUserMetadata, RepoAuditResult, SuspiciousAccountSummary } from './types.js';
import type { SupplyChainEvaluation } from './supply-chain.js';
export interface Stage1Audit {
    score: number;
    flags: string[];
    forkRatio: number;
    watcherRatio: number;
    lifespanDays: number;
}
/**
 * Stage 1: Evaluate repository metadata (fork ratio, watcher ratio, repo size, lifespan, issue activity).
 */
export declare function evaluateStage1(repo: GitHubRepoMetadata): Stage1Audit;
/**
 * Check if a sampled user exhibits bot / low-quality traits.
 */
export declare function inspectSampledUser(user: GitHubUserMetadata): SuspiciousAccountSummary | null;
/**
 * Combine Stage 1 and Stage 2 into the final Audit Result.
 */
export declare function compileAuditResult(repo: GitHubRepoMetadata, stage1: Stage1Audit, sampledUsers?: GitHubUserMetadata[], supplyChainEval?: SupplyChainEvaluation): RepoAuditResult;
