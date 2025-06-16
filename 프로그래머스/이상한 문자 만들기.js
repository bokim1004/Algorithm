// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백 문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
//
// 예를 들어 s가 "try hello world"라면 "TrY HeLlO WoRlD"를 리턴합니다.
function solution(s) {
  return s
    .split(" ")
    .map(
      (word) =>
        word
          .split("")
          .map((char, index) =>
            index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
          )
          .join("") // 문자 배열을 하나의 단어 문자열로 합친다. ["TrY", "HeLlO", "WoRlD"]
    )
    .join(" "); //최종적으로 단어들을 다시 공백으로 연결해서 문자열로 만듦 "TrY HeLlO WoRlD"
}
