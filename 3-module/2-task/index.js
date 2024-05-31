function filterRange(arr, a, b) {
  const newArr = [];

  arr.map(el => {
    if (el >= a && el <= b) {
      newArr.push(el);
    }
  });

  return newArr;
}
