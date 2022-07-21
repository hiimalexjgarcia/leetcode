import { middleNode, ListNode } from './list_node';

test('1->2->3->4->5 => 3', () => {
  const head = new ListNode(1,
    new ListNode(2,
      new ListNode(3,
        new ListNode(4,
          new ListNode(5)
        )
      )
    )
  );

  expect( middleNode( head ) ).toStrictEqual( new ListNode(3, new ListNode(4, new ListNode(5))) );
})

test('1->2->3->4->5->6 => 4', () => {
  const head = new ListNode(1,
    new ListNode(2,
      new ListNode(3,
        new ListNode(4,
          new ListNode(5,
            new ListNode(6)
          )
        )
      )
    )
  );

  expect( middleNode( head ) ).toStrictEqual( new ListNode(4, new ListNode(5, new ListNode(6))) );
})
