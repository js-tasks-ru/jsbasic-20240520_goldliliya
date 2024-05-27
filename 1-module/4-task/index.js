function checkSpam(str) {
  const newStr = str.toLowerCase();
  const firstValue = '1xBet';
  const secondValue = 'XXX';

  return newStr.includes(firstValue.toLowerCase()) || newStr.includes(secondValue.toLowerCase());
}
