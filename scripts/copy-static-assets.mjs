import { cp, mkdir, readdir } from "node:fs/promises";

await mkdir("dist", { recursive: true });

for (const dir of ["assets", "images"]) {
  await cp(dir, `dist/${dir}`, { recursive: true, force: true });
}

await cp("CNAME", "dist/CNAME", { force: true });
await cp("dist/rss.xml", "dist/feed.xml", { force: true });

for (const entry of await readdir("dist/posts", { withFileTypes: true })) {
  if (!entry.isDirectory() || !/^\d+$/.test(entry.name) || entry.name === "1") {
    continue;
  }
  await cp(`dist/posts/${entry.name}`, `dist/page${entry.name}`, {
    recursive: true,
    force: true,
  });
}
