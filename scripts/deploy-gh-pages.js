const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

function run(cmd, args, cwd) {
  const res = spawnSync(cmd, args, {
    cwd,
    stdio: "inherit"
  });
  if (res.status !== 0) {
    process.exit(res.status || 1);
  }
}

function rmContents(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (name === ".git") continue;
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.mkdirSync(path.dirname(d), { recursive: true });
      fs.copyFileSync(s, d);
    }
  }
}

const root = process.cwd();
const publishDir = path.join(root, ".gh-pages");
const worktreeDir = path.join(root, ".gh-pages-worktree");

if (!fs.existsSync(publishDir)) {
  console.error("Missing .gh-pages directory. Run predeploy first.");
  process.exit(1);
}

if (fs.existsSync(worktreeDir)) {
  run("git", ["worktree", "remove", "--force", worktreeDir], root);
}

run("git", ["fetch", "origin"], root);

const checkRemote = spawnSync(
  "git",
  ["ls-remote", "--exit-code", "--heads", "origin", "gh-pages"],
  { cwd: root, stdio: "ignore" }
);

if (checkRemote.status === 0) {
  run("git", ["worktree", "add", "-B", "gh-pages", worktreeDir, "origin/gh-pages"], root);
} else {
  run("git", ["worktree", "add", "--orphan", "gh-pages", worktreeDir], root);
}

rmContents(worktreeDir);
copyDir(publishDir, worktreeDir);

run("git", ["add", "-A"], worktreeDir);

const diff = spawnSync("git", ["diff", "--cached", "--quiet"], {
  cwd: worktreeDir
});

if (diff.status !== 0) {
  run("git", ["commit", "-m", "Deploy GitHub Pages"], worktreeDir);
}

run("git", ["push", "origin", "gh-pages:gh-pages"], worktreeDir);
run("git", ["worktree", "remove", "--force", worktreeDir], root);
