function solve(n) {
  let sum = 0;
  let m = 1;
  for (let i = 1; i <= n; i++) {
    sum += m;
    console.log(m);
    m += 2;
  }
  console.log(`Sum: ${sum}`);
}
solve(5);
