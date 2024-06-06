import esbuild from 'esbuild'

import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';

import { createEsBuildAdapter } from '@softarc/native-federation-esbuild';
import { federationBuilder } from '@softarc/native-federation/build.js';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export async function buildProject() {

    const tsConfig = 'tsconfig.json';
    const outputPath = `dist/`;
    /*
        *  Step 1: Initialize Native Federation
    */


    await federationBuilder.init({
        options: {
            workspaceRoot: path.join(__dirname,'..'),
            outputPath : outputPath,
            tsConfig: tsConfig,
            federationConfig: 'build/federation.config.cjs',
            verbose: true,

        },

        /*
            * As this core lib is tooling-agnostic, you
            * need a simple adapter for your bundler.
            * It's just a matter of one function.
        */
        adapter: createEsBuildAdapter({plugins: []})
    });

    /*
        *  Step 2: Trigger your build process
        *
        *      You can use any tool for this. Here, we go with a very
        *      simple esbuild-based build.
        *
        *      Just respect the externals in `federationBuilder.externals`.
    */

    fs.rmSync(outputPath, {force: true, recursive: true});

    await esbuild.build({
        entryPoints: ['./src/main.ts'],
        external: federationBuilder.externals,
        outdir: outputPath,
        bundle: true,
        platform: 'browser',
        format: 'esm',
        mainFields: ['es2020', 'browser', 'module', 'main'],
        conditions: ['es2020', 'es2015', 'module'],
        resolveExtensions: ['.ts', '.tsx', '.mjs', '.js'],
        tsconfig: tsConfig,
        splitting: true,
        minify: false,
        sourcemap: true,
        define : {
            "global" : "window",
        }
    });

    fs.copyFileSync(`public/index.html`, `dist/index.html`);


    /*
        *  Step 3: Let the build method do the additional tasks
        *       for supporting Native Federation
    */

    await federationBuilder.build();
}


await buildProject()
