const solution = (numbers) =>
  numbers.reduce((a, b) => (a += b)) / numbers.length;

//reduce를 이용해 배열 안의 숫자를 누적해서 더한 후 numbers.length로 총합을 나누어준다.
