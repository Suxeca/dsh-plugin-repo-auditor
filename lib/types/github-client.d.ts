/**
 * GitHub API Client with token resolution, rate limit monitoring, raw CDN fetch, and abort support.
 */
import type { Context } from 'cordis';
import type { GitHubRepoMetadata, GitHubUserMetadata, PluginConfig } from './types.js';
export interface RateLimitState {
    remaining?: number;
    limit?: number;
}
export declare class GitHubClient {
    private ctx;
    private config;
    private token;
    private tokenSource;
    rateLimit: RateLimitState;
    constructor(ctx: Context, config: PluginConfig);
    /**
     * Resolve token via 4-tier fallback:
     * 1. Plugin Config
     * 2. Cordis credentials service
     * 3. process.env.GITHUB_TOKEN
     * 4. User dotfiles (~/.bashrc, ~/.env, .env)
     */
    resolveToken(): Promise<void>;
    isUnauthenticated(): boolean;
    getTokenSource(): string;
    /**
     * Parse repo input to [owner, repo].
     */
    static parseRepo(input: string): {
        owner: string;
        repo: string;
    } | null;
    private request;
    getRepo(owner: string, repo: string, signal?: AbortSignal): Promise<GitHubRepoMetadata>;
    /**
     * Fetch raw file via GitHub Raw CDN (does NOT consume REST API rate limit).
     * Falls back to REST API contents only if raw fetch encounters network failure and a token is present.
     */
    fetchRawFile(owner: string, repo: string, filePath: string, defaultBranch?: string, signal?: AbortSignal): Promise<string | null>;
    getStargazerSample(owner: string, repo: string, totalStars: number, sampleSize: number, signal?: AbortSignal): Promise<GitHubUserMetadata[]>;
}
