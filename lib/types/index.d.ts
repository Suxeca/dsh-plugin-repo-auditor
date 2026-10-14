/**
 * @suxeca/dsh-plugin-repo-auditor (v0.2.0)
 * Native DSH plugin for GitHub star/hollow repository auditing and supply chain security inspection.
 */
import type { Context } from 'cordis';
import z from 'schemastery';
import type { PluginConfig } from './types.js';
export declare const name = "@suxeca/dsh-plugin-repo-auditor";
export declare const inject: string[];
export declare const Config: z<Schemastery.ObjectS<NoInfer<{
    token: z<string, string, "defined">;
    sampleSize: z<number, number, "defined">;
    enableInstallGate: z<boolean, boolean, "defined">;
}>>, Schemastery.ObjectT<NoInfer<{
    token: z<string, string, "defined">;
    sampleSize: z<number, number, "defined">;
    enableInstallGate: z<boolean, boolean, "defined">;
}>>, "plain">;
export declare function apply(ctx: Context, config?: PluginConfig): void;
