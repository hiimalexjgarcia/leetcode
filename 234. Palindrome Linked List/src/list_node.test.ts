import { isPalindrome, ListNode } from './list_node';

test('1->2->2->1 => true', () => {

  const head = new ListNode(1,
    new ListNode(2,
      new ListNode(2,
        new ListNode(1)
      )
    )
  )

  expect( isPalindrome(head) ).toBe( true );
})
