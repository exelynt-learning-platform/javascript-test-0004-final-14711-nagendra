let n = 4;
let size = 2 * n - 1;

for (let i = 0; i < size; i++) {
  let row = "";

  for (let j = 0; j < size; j++) {
    let value = Math.max(Math.abs(n - 1 - i), Math.abs(n - 1 - j)) + 1;
    row += value + " ";
  }

  console.log(line);
}