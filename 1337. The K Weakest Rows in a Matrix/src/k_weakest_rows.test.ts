import kWeakestRows from './k_weakest_rows';

test('mat=[[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], k=3 => [2, 0, 3]', () => {
  const mat = [
    [1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]
  ];
  const k = 3;

  expect( kWeakestRows( mat, k ) ).toStrictEqual( [2, 0, 3] );
})

test('mat=[[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]], k=2 => [0, 2]', () => {
  const mat = [
    [1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]
  ];
  const k = 2;

  expect( kWeakestRows( mat, k ) ).toStrictEqual( [0, 2] );
})
