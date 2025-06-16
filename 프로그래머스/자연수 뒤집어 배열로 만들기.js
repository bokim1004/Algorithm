// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열형태로 리턴해주세요
// 예를 들어 n이 12345이면 [5, 4, 3, 2, 1]을 리턴합니다.

function solution(n) {
  // n을 문자열로 변환한 후, split()으로 각 자리 숫자를 배열로 분리
  // map()을 사용하여 각 문자를 숫자로 변환하고, reverse()로 배열을 뒤집음
  return String(n).split("").map(Number).reverse();
}

// 또 다른 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((o) => (o = parseInt(o)));
}
