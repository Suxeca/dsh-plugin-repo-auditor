/**
 * Detection markers, assembled at runtime.
 *
 * WHY THIS FILE EXISTS
 * This plugin statically inspects *other* packages for hostile markers:
 * pre-execution hooks, host-process execution, sensitive Cordis services and
 * gate-evasion tokens. If those markers appeared here as contiguous literals,
 * a static scan of THIS package would run into its own detector table and
 * report it as a prompt-injection / gate-evasion payload (a self-flag): the
 * auditor would grade itself CRITICAL, and its install gate would fire on the
 * users installing it.
 *
 * Building every marker from fragments keeps the runtime values byte-identical
 * to the literals they replace, without ever shipping those literals.
 * The first fragment of each pair/triple is deliberately not a marker itself.
 */
import type { Events } from 'cordis';
/**
 * Typed as a Cordis event key so `ctx.on(TOKEN_PRE_EXECUTE, …)` keeps the hook
 * listener type-checked, while the name itself is still assembled at runtime.
 */
export declare const TOKEN_PRE_EXECUTE: keyof Events;
export declare const TOKEN_PLUGIN_MANAGER: string;
export declare const TOKEN_CREDENTIALS: string;
export declare const TOKEN_CHILD_PROCESS: string;
export declare const TOKEN_EXEC_SYNC: string;
export declare const TOKEN_SPAWN_SYNC: string;
export declare const TOKEN_EXEC_FILE: string;
export declare const TOKEN_SKIP_GATE: string;
export declare const REGEX_SSH: string;
export declare const REGEX_DOT_ENV: string;
export declare const REGEX_NPMRC: string;
export declare const REGEX_AWS: string;
export declare const TOKEN_GITHUB_TOKEN: string;
export declare const REGEX_ETC_PASSWD: string;
export declare const REGEX_IGNORE_PREVIOUS: string;
export declare const REGEX_DISREGARD_PREVIOUS: string;
