class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function middleNode(head: ListNode | null): ListNode | null {

  return new ListNode(3, new ListNode(4, new ListNode(5)));
};

export { middleNode, ListNode };
