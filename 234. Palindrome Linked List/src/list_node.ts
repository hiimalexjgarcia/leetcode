class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (head === null)
    return false;

  if (head.next === null)
    return true;

  let cur: ListNode | null = head.next;
  let stack: number[] = [head.val];

  while (cur !== null)  {
    stack.push(cur.val)
    cur = cur.next;
  }

  while ( stack.length > 1 ) {
    if ( stack.pop() !== stack.shift() )
      return false;
  }

  return ( stack.length < 2 ) ? true : false;
}

export { isPalindrome, ListNode };
