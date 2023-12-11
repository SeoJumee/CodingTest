function solution(my_string, indices) {
  return [...my_string]
    .map((a, i) => (indices.includes(i) ? 0 : a))
    .filter((a) => a !== 0)
    .join('');
}

// 문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
