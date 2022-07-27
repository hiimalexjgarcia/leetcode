function maximumWealth(accounts: number[][]): number {
  let result = 0;

  accounts.forEach( (account) => {
    let sum = account.reduce( (p, c) => p + c, 0);
    if (sum > result) result = sum;
  });

  return result;
};

export default maximumWealth;
