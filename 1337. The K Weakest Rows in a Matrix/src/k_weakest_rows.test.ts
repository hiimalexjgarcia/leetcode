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
