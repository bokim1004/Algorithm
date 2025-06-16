// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i); // 작은 약수
      if (i !== n / i) {
        // 중복된 약수를 방지
        divisors.push(n / i); // 짝이 되는 큰 약수
      }
    }
  }
  return divisors.reduce((acc, cur) => acc + cur, 0);
}
