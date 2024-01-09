// "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.
// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

const filePath =
  process.platform === 'linux' ? 'dev/stdin' : 'Bronze/input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

for (let i = 1; i < input.length; i++) {
  let count = 0;
  let sum = 0;

  input[i].split('').map((i) => (i === 'O' ? (sum += ++count) : (count = 0)));
  console.log(sum);
}

// const readline = require('readline');
// const fs = require('fs');

// const filePath =
//   process.platform === 'linux' ? 'dev/stdin' : 'Bronze/input.txt';

// const rl = readline.createInterface({
//   input: fs.createReadStream(filePath),
//   output: process.stdout,
//   terminal: false,
// });

// let lineCount = 0;
// const input = [];

// rl.on('line', (line) => {
//   if (lineCount !== 0) {
//     input.push(line);
//     lineCount++;
//   } else {
//     lineCount++;
//   }
// });

// rl.on('close', () => {
//   for (let i = 0; i < input.length; i++) {
//     let count = 0;
//     let sum = 0;

//     input[i].split('').map((i) => (i === 'O' ? (sum += ++count) : (count = 0)));
//     console.log(sum);
//   }
// });
