import DocsManager from "./DocsManager";

const blacklisted = new Set(["docs", "docs-website"]);

export default new DocsManager({
    id: "main",
    name: "Main",
    global: "Main",
    repo: "NezuChan/erela.js-filter",
    defaultTag: "main",
    docsBranch: "docs",
    branchFilter: (branch) => !blacklisted.has(branch) && !branch.startsWith("dependabot/")
});
