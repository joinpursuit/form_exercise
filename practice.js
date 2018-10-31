// const rangeWithStep = (start, end, step, arr = []) => {
//   if (start > end) {
//     return arr;
//   }
//
//   arr.push(start);
//   start += step;
//   return rangeWithStep(start, end, step, arr);
// };
//
// console.log(rangeWithStep(2, 10, 3));

// Write a method, `digital_root(num)`. It should Sum the digits of a positive
// integer. If it is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
//
// You may wish to use a helper function, `digital_root_step(num)` which performs
// one step of the process. Challenge yourself and solve it recursively!!!!

function digitalRoot(num) {
  if (num > 10) {
    return num;
  }

  digitalRoot(Math.floor(num / 10) + (num % 10));
}

function digitalRootStep(num) {
  let root = 0;
  while (num > 0) {
    root += num % 10;
    num = Math.floor(num / 10);
  }

  return root;
}
