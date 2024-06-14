/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

  let res = []

  function dfs(cur = [], idx = 0) {
      if (cur.length >= 4) {
          if (idx === s.length) {
              res.push(cur.join('.'))
          }
          return
      }
      for (let i = 1; i <= 3; i++) {
          if (s[idx] === '0' && i > 1) continue 
          const tmp = s.substring(idx, i + idx)
          if (+tmp < 0 || +tmp > 255) continue
          dfs([...cur, tmp], idx + i)
      }
      
  }
  dfs();

  return res;
};
// @lc code=end

