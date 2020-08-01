const ansiLegends = [
  ["ESC",""],["F1",""],["F2",""],["F3",""],["F4",""],["F5",""],["F6",""],["F7",""],["F8",""],["F9",""],["F10",""],["F11",""],["F12",""],["PRTSC",""],["SCROLLLOCK",""],["PAUSE","BREAK"],["TILDE","BACK_QUOTE"],["EXCLAMATION","1"],["AT","2"],["HASH","3"],["DOLLAR","4"],["PERCENT","5"],["CIRCUMFLEX","6"],["AMPERSAND","7"],["ASTERISK","8"],["OPEN_PAREN","9"],["CLOSE_PAREN","0"],["UNDERSCORE","HYPHEN"],["ADD","EQUALS"],["BACKSPACE",""],["INSERT",""],["HOME",""],["PGUP",""],["NUMLOCK",""],["SLASH",""],["ASTERISK",""],["HYPHEN",""],["TAB",""],["Q",""],["W",""],["E",""],["R",""],["T",""],["Y",""],["U",""],["I",""],["O",""],["P",""],["OPEN_CURLY_BRACKET","OPEN_BRACKET"],["CLOSE_CURLY_BRACKET","CLOSE_BRACKET"],["PIPE","BACK_SLASH"],["DELETE",""],["END",""],["PGDN",""],["7","HOME"],["8","UP"],["9","PGUP"],["ADD",""],["CAPSLOCK",""],["A",""],["S",""],["D",""],["F",""],["G",""],["H",""],["J",""],["K",""],["L",""],["COLON","SEMICOLON"],["DOUBLE_QUOTE","QUOTE"],["ENTER",""],["4","LEFT"],["5",""],["6","RIGHT"],["SHIFT",""],["Z",""],["X",""],["C",""],["V",""],["B",""],["N",""],["M",""],["LESS_THAN","COMMA"],["GREATER_THAN","PERIOD"],["QUESTION","SLASH"],["SHIFT",""],["UP",""],["1","END"],["2","DOWN"],["3","PGDN"],["ENTER",""],["CTRL",""],["WIN",""],["ALT",""],["",""],["WIN",""],["MENU",""],["CTRL",""],["LEFT",""],["DOWN",""],["RIGHT",""],["0","INS"],["PERIOD","DEL"],
];

const ansiNames = [
  "ESC","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","PRTSC","SCROLLLOCK","PAUSE","BACK_QUOTE","1","2","3","4","5","6","7","8","9","0","MINUS","EQUALS","BACKSPACE","INSERT","HOME","PGUP","NUMLOCK","MINUS","MULTIPLY","SUBTRACT","TAB","Q","W","E","R","T","Y","U","I","O","P","OPEN_BRACKET","CLOSE_BRACKET","BACK_SLASH","DELETE","END","PGDN","NUMPAD7","NUMPAD8","NUMPAD9","ADD","CAPSLOCK","A","S","D","F","G","H","J","K","L","SEMICOLON","QUOTE","ENTER","NUMPAD4","NUMPAD5","NUMPAD6","SHIFT","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","SHIFT","UP","NUMPAD1","NUMPAD2","NUMPAD3","ENTER","CTRL","WIN","ALT","SPACE","WIN","MENU","CTRL","LEFT","DOWN","RIGHT","NUMPAD0","DECIMAL",
];

export const ansiMap = ansiLegends.reduce((obj, value, index) => {
    obj[value] = ansiNames[index];
    return obj;
}, {});
