require("esbuild")
  .build({
    entryPoints: ["index.ts"],
    bundle: true,
    minify: false,
    sourcemap: true,
    outfile: "dist/index.js",
  })
  .catch(() => process.exit(1));