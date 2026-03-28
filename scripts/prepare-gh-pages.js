const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, ".gh-pages");

const includePaths = [
  "index.html",
  "game.html",
  "characters.html",
  "setting_game.html",
  "tutorial.html",
  "rhythme.html",
  "css",
  "js",
  "assets",
  "CNAME"
];

function copyEntry(relPath) {
  const src = path.join(root, relPath);
  if (!fs.existsSync(src)) return;

  const dest = path.join(outDir, relPath);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.cpSync(src, dest, { recursive: true });
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const relPath of includePaths) {
  copyEntry(relPath);
}

fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

