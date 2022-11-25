// const add = (a, b) => {
//     ...
//     return sum
//   }

//   console.log(add("11111111101234567","77777777707654321"))
//   console.log(add("911111111101234567","77777777707654321"))

const add = (a, b) => {
  let overflow = false;
  let sum = "";
  const maxLength = Math.max(a.length, b.length);
  for (i = 1; i <= maxLength; i++) {
    let ai = a[a.length - i] || "0";
    let bi = b[b.length - i] || "0";
    let ci = parseInt(ai) + parseInt(bi) + (overflow ? 1 : 0);
    overflow = ci >= 10;
    ci = overflow ? ci - 10 : ci;
    sum = ci + sum;
  }
  sum = overflow ? "1" + sum : sum;
  return sum;
};
