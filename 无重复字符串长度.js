let longString = (s) => {
  let set = new Set();
  let n = s.length;
  let rk = -1;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      set.delete(s.charAt(i - 1)); //删除set中的第一个字符
    }
    while (rk + 1 < n && !set.has(s.charAt(rk + 1))) {
      set.add(s.charAt(rk + 1)); //依次向前增加，直到重复
      ++rk;
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
