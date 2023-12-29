export default function firstLetterUppercase(word) {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function deleteMultipleSpaces(text) {
  return text.replace(/ +/g, ' ');
}

export function calculateLevenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const distanceMatrix = Array.from(Array(a.length + 1), () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) {
    for (let j = 0; j <= b.length; j++) {
      if (i === 0) {
        distanceMatrix[i][j] = j;
      } else if (j === 0) {
        distanceMatrix[i][j] = i;
      } else {
        distanceMatrix[i][j] =
          a[i - 1] === b[j - 1]
            ? distanceMatrix[i - 1][j - 1]
            : 1 +
              Math.min(
                distanceMatrix[i - 1][j],
                distanceMatrix[i][j - 1],
                distanceMatrix[i - 1][j - 1]
              );
      }
    }
  }

  return distanceMatrix[a.length][b.length];
}
