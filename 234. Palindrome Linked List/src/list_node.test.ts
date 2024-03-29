import { isPalindrome, ListNode } from './list_node';

test('1->2->2->1 => true', () => {
  const head = new ListNode(1,
    new ListNode(2,
      new ListNode(2,
        new ListNode(1)
      )
    )
  )

  expect( isPalindrome( head ) ).toBe( true );
})

test('1->2 => false', () => {
  const head = new ListNode(1,
    new ListNode(2)
  )

  expect( isPalindrome( head ) ).toBe( false );
})

test('1 => true', () => {
  const head = new ListNode(1)

  expect( isPalindrome( head ) ).toBe( true );
})

test('1->2->3->2->1 => true', () => {
  const head = new ListNode(1,
    new ListNode(2,
      new ListNode(3,
        new ListNode(2,
          new ListNode(1)
        )
      )
    )
  )

  expect( isPalindrome( head ) ).toBe( true );
})

test('1->3->4->4->1 => false', () => {
  const head = new ListNode(1,
    new ListNode(3,
      new ListNode(4,
        new ListNode(4,
          new ListNode(1)
        )
      )
    )
  )

  expect( isPalindrome( head ) ).toBe( false );
})

test('1->0->1 => true', () => {
  const head = new ListNode(1,
    new ListNode(0,
      new ListNode(1)
    )
  )

  expect( isPalindrome( head ) ).toBe( true );
})
