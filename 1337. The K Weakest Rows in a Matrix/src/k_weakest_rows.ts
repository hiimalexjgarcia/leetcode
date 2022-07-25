function kWeakestRows(mat: number[][], k: number): number[] {
  let ordmat: number[][] = [];
  let result: number[] = [];

  for (let i = 0; i < mat.length; i++) {
    ordmat.push([i, mat[i].reduce((p, c) => p + c, 0)]);
  }
  ordmat.sort( (a: number[], b: number[]): number => {
    return a[0] - b[0]
  });
  ordmat.sort( (a: number[], b: number[]): number => {
    return a[1] - b[1]
  });
  for (let i = 0; i < k; i++) {
    result.push(ordmat[i][0]);
  }
  
  return result;
};

export default kWeakestRows;
