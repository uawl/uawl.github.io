import { readdir, mkdir, writeFile, rm, copyFile } from "fs/promises";
import { join, basename } from "path";
import { build } from "bun";
import { render } from "preact-render-to-string";

const PAGES_DIR = "pages";
const OUT_DIR = "dist";
const PUBLIC_DIR = "public";

await rm(OUT_DIR, { force: true, recursive: true });
await mkdir(OUT_DIR, { recursive: true });

const pageFiles = (await readdir(PAGES_DIR)).filter(f => f.endsWith(".tsx"));

for (const file of pageFiles) {
  const name = basename(file, ".tsx");
  const absPath = join(process.cwd(), `${PAGES_DIR}/${file}`)
  const Page = (await import(absPath)).default;

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${name}</title>
  </head>
  <body>
    <div id="app">${render(<Page />)}</div>
    <script type="module" src="./${name}.js"></script>
  </body>
</html>
  `.trim();

  await writeFile(join(OUT_DIR, `${name}.html`), html, "utf8");

  await build({
    entrypoints: [`scripts/hydrate-entry.tsx`],
    outdir: OUT_DIR,
    naming: `${name}.js`,
    define: { "__ENTRY__": `"${absPath}"` },
  });
}

async function copyDir(src: string, dest: string) {
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

try {
  await copyDir(PUBLIC_DIR, OUT_DIR);
}
catch {}