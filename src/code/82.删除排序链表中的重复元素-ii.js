/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

  let dummty = new ListNode(null);
  let prev = dummty;
  while (head) {
      if (head.next && (head.val === head.next.val)) {
          const x = head.val
          while (head && (head.val === x)) {
              head = head.next
          }
      }
      else {
          const tmp = head.next
          head.next = null;
          prev.next = head;
          prev = prev.next;
          head = tmp;
      }
  }

  return dummty.next  
};
// @lc code=end

