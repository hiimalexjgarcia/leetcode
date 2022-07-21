class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let count = 0;
  let cur: ListNode | null = head,
      result: ListNode | null = null;

  while ( cur !== null ) {
    count++;
    cur = cur.next;
  }

  let i = 0;
  cur = head;
  while ( cur !== null ) {
    i++;
    cur = cur.next;
    if ( i === Math.floor(count / 2) ) {
      result = cur;
      break;
    }
  }

  return result;
};

export { middleNode, ListNode };
