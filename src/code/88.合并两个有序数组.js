/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {


  let cur = m + n - 1;
  let m1 = m - 1, n1 = n - 1;

  while (n1 >= 0 && m1 >= 0) {
      if (nums1[m1] > nums2[n1]) {
          nums1[cur] = nums1[m1]
          m1--;
      }
      else {
          nums1[cur] = nums2[n1]
          n1--;
      }
      cur--;
  }
  while (n1 >= 0) {
      nums1[cur] = nums2[n1]
      n1--;
      cur--;
  }
  return nums1
};
// @lc code=end

