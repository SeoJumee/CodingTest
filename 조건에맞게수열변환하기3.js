function solution(arr, k) {
  if (k % 2 === 1) {
    return arr.map((i) => i * k);
  } else if (k % 2 === 0) {
    return arr.map((i) => i + k);
  }
}

// 정수 배열 arr와 자연수 k가 주어집니다.
// 만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.
