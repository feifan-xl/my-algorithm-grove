/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

  let res = [];
  let len = nums.length;
  let used = {};
  function dfs (cur = [], idx = 0) {
      res.push([...cur])
      if (cur.length === len) {
          return
      }
      for (let i = idx; i < len; i++) {
          if (used[i]) continue
          used[i] = true
          dfs([...cur, nums[i]], i)
          used[i] = false
      }
  }
  dfs();
  return res;
};