/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
  let l = 0, r = x, res;
  while (l<= r) {
      mid = Math.floor((l + r) / 2);
      const tmp = mid * mid;
      if (tmp > x) {
          r = mid - 1;
      }
      else if (tmp < x) {
          res = mid;
          l = mid + 1;
      }
      else {
          return mid
      }
  }
  return res
};