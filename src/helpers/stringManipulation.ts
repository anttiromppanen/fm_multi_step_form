const wordToUpperCase = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const preferDefaultExportIsStupidRule = () => {};

export { wordToUpperCase, preferDefaultExportIsStupidRule };
