/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

  // const res = [];
  // let list = []
  // while (root || list.length > 0) {
  //     while (root) {
  //         list.push(root)
  //         root = root.left
  //     }
  //     root = list.pop();
  //     res.push(root.val)
  //     root = root.right
  // }
  // return res

  let res = []

  function dfs (head) {
      if (head === null) return
      dfs(head.left)
      res.push(head.val)
      dfs(head.right)
  }
  dfs(root)
  return res
};
// @lc code=end

