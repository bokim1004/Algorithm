// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return하는 함수를 작성하세요.
//N = 123이면 1+2+3 = 6을 return합니다.

function solution(n) {
  // n을 문자열로 변환한 후, split()으로 각 자리 숫자를 배열로 분리
  // map()을 사용하여 각 문자를 숫자로 변환하고, reduce()로 합계를 계산
  return String(n)
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
}
