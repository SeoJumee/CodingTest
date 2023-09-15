function solution(n, control) {
  return [...control].reduce((acc, cur) => {
    switch (cur) {
      case 'w':
        return acc + 1;
      case 's':
        return acc - 1;
      case 'd':
        return acc + 10;
      case 'a':
        return acc - 10;
      default:
        return acc;
    }
  }, n);
}

// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.
