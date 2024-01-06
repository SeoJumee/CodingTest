function solution(n) {
  let answer = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    answer += parseInt(n[i]);
  }
  return answer;
}
// n을 string으로 변환 후 n의 길이만큼 for문을 돌려 한글자씩 정수로 변환해 answer에 더하는 함수
