import esbuild from 'esbuild'

const ctx = await esbuild.context({
    entryPoints : ['./src/index.tsx'],
    outfile : './public/bundle.js',
    bundle : true,
    minify : false,
    sourcemap:true,
    format : "esm",
    loader : {
        ".woff2" : "dataurl"
    }
})

await ctx.serve({
    port : 3000,
    servedir: './public'
})
console.log("Watching")