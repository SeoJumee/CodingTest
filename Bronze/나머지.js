const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : 'Bronze/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const result = new Set();
input.forEach((i) => result.add(i % 42));

console.log(result.size);
