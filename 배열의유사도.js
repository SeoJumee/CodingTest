function solution(s1, s2) {
  return s1.filter((e) => s2.includes(e)).length;
}

// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return
