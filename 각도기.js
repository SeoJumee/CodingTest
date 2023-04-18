function solution(angle) {
  if (angle > 0 && angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (angle > 90 && angle < 180) return 3;
  else return 4;
}

// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180
