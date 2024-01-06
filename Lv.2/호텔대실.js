function solution(book_time) {
  let room = [];

  // 시간 오름차순으로 정렬 후 순회
  book_time.sort().forEach(([start, end]) => {
    let startTime = toMinute(start);
    let endTime = toMinute(end) + 10;

    // 현재 예약이 시작될 시간보다 작거나 같은 종료 시간 객실 찾기
    const idx = room.findIndex((v) => v <= startTime);

    // 없다면 해당 객실의 종료 시간을 추가
    if (idx === -1) room.push(endTime);
    // 기존에 존재하는 호실을 재사용해 해당 호실의 종료 시간을 업데이트
    else room[idx] = endTime;
  });

  return room.length;
}

// 시간을 분으로 통일하는 함수
function toMinute(s) {
  let [hours, minutes] = s.split(':');
  return hours * 60 + Number(minutes);
}

// 호텔을 운영 중인 코니는 최소한의 객실만을 사용하여 예약 손님들을 받으려고 합니다. 한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고 다음 손님들이 사용할 수 있습니다.
// 예약 시각이 문자열 형태로 담긴 2차원 배열 book_time이 매개변수로 주어질 때, 코니에게 필요한 최소 객실의 수를 return 하는 solution 함수를 완성해주세요.
