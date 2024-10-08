export default function (set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const filteredValues = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}
