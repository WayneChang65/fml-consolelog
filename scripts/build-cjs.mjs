// Post-process the CommonJS tsc output into publishable .cjs files.
//
// tsc (module: CommonJS) emits dist/cjs/{index.js,fml_consolelog.js} with
// require("./fml_consolelog.js"). Because the package root has "type": "module",
// .js files under dist/cjs would be treated as ESM by Node. Renaming every
// emitted .js to .cjs makes Node load them as CommonJS, so the internal
// requires must be rewritten to match the new extensions.
//
// This script runs after the main `tsc` (ESM + declarations) and
// `tsc -p tsconfig.cjs.json` (CommonJS implementation) builds.
import { readdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const outDir = new URL('../dist/cjs', import.meta.url).pathname;

for (const name of readdirSync(outDir)) {
    if (!name.endsWith('.js')) continue;
    const src = join(outDir, name);
    const dest = src.slice(0, -3) + '.cjs';
    let code = readFileSync(src, 'utf8');
    code = code.replace(
        /require\((["'])(\.{1,2}\/[^"']+)\.js\1\)/g,
        'require($1$2.cjs$1)'
    );
    writeFileSync(dest, code);
    rmSync(src);
}
