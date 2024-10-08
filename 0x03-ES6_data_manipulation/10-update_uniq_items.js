export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [item, quantity] of myMap) {
    if (quantity === 1) {
      myMap.set(item, 100);
    }
  }
  return myMap;
}
