import * as fs from "node:fs";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", "This is the shortest route, in a straight line. That the line crosses a lake, a wedding, and a locked farm gate is a terrain issue, not a navigation error.\n", "utf-8");
