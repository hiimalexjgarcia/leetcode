class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let cur: ListNode | null = head;
  let stack: number[] = [];

  while (cur !== null)  {
    if ( cur.val === stack[ stack.length - 1 ] ) {
      stack.pop();
    } else {
      stack.push(cur.val)
    }
    cur = cur.next;
  }

  return ( stack.length === 0 ) ? true : false;
}

export { isPalindrome, ListNode };
