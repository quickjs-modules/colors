import * as colors from "./colors.js";

const _colors = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
];

for (const c of _colors) {
  print(colors[c](`This text is ${c}`));
}
