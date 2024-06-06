import esbuild from 'esbuild'

const ctx = await esbuild.context({
    entryPoints : ['./src/main.ts'],
    outfile : './dist/bundle.js',
    bundle : true,
    minify : false,
    sourcemap:true,
    format : "esm"
})

await ctx.serve({
    port : 3000,
    servedir: './dist'
})
console.log("Watching")