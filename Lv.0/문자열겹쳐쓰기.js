function solution(my_string, overwrite_string, s) {
  const myStr = [...my_string];
  myStr.splice(s, overwrite_string.length, overwrite_string);
  return myStr.join('');
}

// 문자열 my_string, overwrite_string과 정수 s가 주어집니다.
// 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
