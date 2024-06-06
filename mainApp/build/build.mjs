import esbuild from 'esbuild'

const ctx = await esbuild.context({
    entryPoints : ['./src/main.ts'],
    outfile : './public/bundle.js',
    bundle : true,
    minify : false,
    sourcemap:true,
    format : "esm"
})

await ctx.serve({
    port : 3000,
    servedir: './public'
})
console.log("Watching")