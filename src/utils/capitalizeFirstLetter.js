export default function capitalizeFirstLetter(string) {
  const split = string.split(' ');
  const newString = [];

  split.forEach((word) => {
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    newString.push(newWord);
  });

  const result = newString.join(' ');
  return result;
}
