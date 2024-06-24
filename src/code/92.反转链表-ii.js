/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {


  let dummty = new ListNode(null);
  dummty.next = head;

  let pre = dummty;
  for (let i = 1; i < left; i++) {
      pre = pre.next
  }

  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
      rightNode = rightNode.next
  }
  let leftNode = pre.next;
  let cur = rightNode.next

  pre.next = null
  rightNode.next=  null

  reverse(leftNode)
  
  pre.next = rightNode
  leftNode.next = cur

  return dummty.next
  
  function reverse(root) {
      let cur = root, prev = null;
      while (cur) {
          const tmp = cur.next;
          cur.next = prev;
          prev = cur
          cur = tmp
      }
  }

};
// @lc code=end

