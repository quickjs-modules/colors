const end = "\u001b[39m";

function colorize(color) {
  return function (m) {
    return `\u001b[${color}m${m}${end}`;
  };
}

export const black = colorize(30);
export const red = colorize(31);
export const green = colorize(32);
export const yellow = colorize(33);
export const blue = colorize(34);
export const magenta = colorize(35);
export const cyan = colorize(36);
export const white = colorize(37);
