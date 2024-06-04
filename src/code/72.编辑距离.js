/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {

  // word1 -> word2 
  // 1. insert

  const n = word1.length;
  const m = word2.length;
  let dp = Array(n + 1).fill(0).map(()=> Array(m + 1).fill(0));

  for (let i = 0; i < n + 1; i++) {
      dp[i][0] = i
  }

  for (let j = 0; j < m + 1; j++) {
      dp[0][j] = j
  }

  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
          const left = dp[i - 1][j] + 1;
          const down = dp[i][j - 1] + 1
          let tmp = dp[i - 1][j - 1]
          if (word1[i - 1] !== word2[j - 1]) {
              tmp++;
          }
          dp[i][j] = Math.min(left, Math.min(down, tmp))
      }
  }
  
  return dp[n][m]
};