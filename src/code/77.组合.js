/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [], used = {};
  function dfs (cur = [], idx = 1) {
    if (cur.length === k) {
      res.push([...cur])
      return
    }
    for (let i = idx; i <= n; i++) {
      if (used[i]) continue
      used[i] = true
      dfs([...cur, i], i + 1)
      used[i] = false
    }
  }
  dfs();
  return res
};
// @lc code=end

