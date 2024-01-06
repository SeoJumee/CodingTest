function solution(num_list) {
  let isEven = num_list.filter((a) => a % 2 === 0);
  let isOdd = num_list.filter((a) => a % 2 === 1);

  let evenSum = isEven.reduce((acc, cur) => acc + String(cur));
  let oddSum = isOdd.reduce((acc, cur) => acc + String(cur));

  return Number(evenSum) + Number(oddSum);
}

// 정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.
