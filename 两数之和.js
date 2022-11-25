// const numbers = [2,7,11,15]
// const target = 9
// const twoSum = (numbers, target) => {
//   // ...
// }
// console.log(twoSum(numbers, target))
// [0, 1] 或 [1, 0]

// 出题者保证
// 1. numbers 中的数字不会重复
// 2. 只会存在一个有效答案

const twoSum = (numbers, target) => {
  let map = {};
  for (i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let number2 = target - number;
    if (number2 in map) {
      number2Index = map[number2];
      return [i, number2Index];
    } else {
      map[number] = i;
    }
  }
  return [];
};
