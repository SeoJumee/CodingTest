function solution(n) {
    let sum = 0;
    for(let i = 2; i <= n; i+=2)
        sum += i;
    return sum;
}
// for문의 i가 n이하일 때 2씩 증가시켜 sum에 더해주는 함수