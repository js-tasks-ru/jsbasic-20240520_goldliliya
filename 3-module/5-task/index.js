function getMinMax(str) {
  const arr = str
    .split(" ")
    .filter((item) => !isNaN(item))
    .map((item) => parseFloat(item));

  return { min: Math.min(...arr), max: Math.max(...arr) };
}
