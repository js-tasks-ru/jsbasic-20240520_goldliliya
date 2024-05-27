function factorial(n) {
  if (n < 0) {

    return "Факториал отрицательного числа не определен";
  } else if (n === 0) {

    return 1;
  } else {
    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
  }
}

/** второй способ */
// function factorial(n) {
//   switch (n) {
//   case n < 0:
//     return "Факториал отрицательного числа не определен";
//   case n === 0:
//     return 1;
//   default:
//     let result = 1;
//
//     for (let i = 1; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
// }
