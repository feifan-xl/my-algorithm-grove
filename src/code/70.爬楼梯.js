/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let n1 = 1, n2 = 2;
  for (let i = 3; i <= n; i++) {
      const tmp = n2
      n2 = n2 + n1
      n1 = tmp
  }

  return n2
};