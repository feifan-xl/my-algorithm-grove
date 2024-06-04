/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length;
  let flag = false;
  digits[len - 1] = digits[len - 1] + 1;
  for (let i = len - 1; i >= 0; i--) {
      const tmp = digits[i] + (flag ? 1 : 0);
      flag = tmp >= 10;
      digits[i] = tmp % 10;
      if (i === 0) {
          if (flag) {
              digits.unshift(1)
          }
      }
  }
  return digits
};
// @lc code=end

