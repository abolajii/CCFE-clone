function arrayToKeyValuePairs(array) {
  if (array.length < 0) return;
  const keyValuePairs = {};
  array.forEach((item) => {
    const key = item.tag.toLowerCase().replace(/\s+/g, "_");
    keyValuePairs[key] = item.value;
  });
  return keyValuePairs;
}
export { arrayToKeyValuePairs };
