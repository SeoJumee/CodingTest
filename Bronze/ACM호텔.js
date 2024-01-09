// ACM 호텔 매니저 지우는 손님이 도착하는 대로 빈 방을 배정하고 있다.
// 고객 설문조사에 따르면 손님들은 호텔 정문으로부터 걸어서 가장 짧은 거리에 있는 방을 선호한다고 한다.
// 여러분은 지우를 도와 줄 프로그램을 작성하고자 한다. 즉 설문조사 결과 대로 호텔 정문으로부터 걷는 거리가 가장 짧도록 방을 배정하는 프로그램을 작성하고자 한다.
// 문제를 단순화하기 위해서 호텔은 직사각형 모양이라고 가정하자.
// 각 층에 W 개의 방이 있는 H 층 건물이라고 가정하자 (1 ≤ H, W ≤ 99). 그리고 엘리베이터는 가장 왼쪽에 있다고 가정하자(그림 1 참고).
// 이런 형태의 호텔을 H × W 형태 호텔이라고 부른다.
// 호텔 정문은 일층 엘리베이터 바로 앞에 있는데, 정문에서 엘리베이터까지의 거리는 무시한다. 또 모든 인접한 두 방 사이의 거리는 같은 거리(거리 1)라고 가정하고 호텔의 정면 쪽에만 방이 있다고 가정한다.

const filePath =
  process.platform === 'linux' ? 'dev/stdin' : 'Bronze/input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

for (let i = 1; i < input.length; i++) {
  const arr = input[i].split(' ');
  const H = parseInt(arr[0]);
  const N = parseInt(arr[2]);

  let floor,
    ho = 0;

  floor = N % H === 0 ? H : N % H;
  ho = (N % H === 0 ? N / H : Math.floor(N / H) + 1)
    .toString()
    .padStart(2, '0');

  console.log(`${floor}${ho}`);
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

// rl.on('line', (line) => {
//   if (lineCount !== 0) {
//     const arr = line.split(' ');
//     const H = parseInt(arr[0]);
//     const N = parseInt(arr[2]);

//     let floor,
//       ho = 0;

//     floor = N % H === 0 ? H : N % H;
//     ho = (N % H === 0 ? N / H : Math.floor(N / H) + 1)
//       .toString()
//       .padStart(2, '0');

//     console.log(`${floor}${ho}`);
//   }
//   lineCount++;
// });
