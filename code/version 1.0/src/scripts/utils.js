export default function firstLetterUppercase(word) {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function deleteMultipleSpaces(text) {
  return text.replace(/ +/g, ' ');
}
