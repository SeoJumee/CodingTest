const filePath =
  process.platform === 'linux' ? 'dev/stdin' : 'Bronze/input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

for (let i = 1; i < input.length; i++) {
  let count = 0;
  let sum = 0;

  input[i].split('').map((i) => (i === 'O' ? (sum += ++count) : (count = 0)));
  console.log(sum);
}
