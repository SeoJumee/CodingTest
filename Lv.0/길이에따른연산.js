function solution(num_list) {
  if (num_list.length > 10) return num_list.reduce((acc, cur) => acc + cur, 0);
  else return num_list.reduce((acc, cur) => acc * cur, 1);
}

// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을
// 10 이하이면 모든 원소의 곱을 return하는 함수
