/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let i = 0, j = 0,count = 0;
  while (j < nums.length) {
      if (count >= 2 && nums[j] === nums[j - 1]) {
          j++;
          continue
      }
      if (nums[j] !== nums[j - 1]) {
          count = 0
      }
      nums[i] = nums[j]
      i++;
      j++;
      count++;
  }
  return i
};
// @lc code=end

