function solution(number, n, m) {
    if (n%m == 0) {
        x = n
    } else if (m%n == 0) {
        x = m
    } else {
        x = n*m
    }
    
    return number % x == 0 ? 1 : 0
}


// function solution(number, n, m) {
//   return +!(number % n || number % m);
// }

// 해당 함수는 세 개의 인수(number, n, m)를 받고, 다음과 같은 작업을 수행합니다.

// 1. 'number'를 'n'으로 나눈 나머지(number % n)와 'number'를 'm'으로 나눈 나머지(number % m)를 계산합니다.
// 2. 이 두 나머지 값 중 하나라도 0이 아니라면(즉, 어느 하나라도 나머지가 남는다면) 참(true)으로 평가됩니다.
// 3. 그 결과에 논리 부정 연산자(!)를 적용하여 참(true)인 경우에는 거짓(false)을, 거짓(false)인 경우에는 참(true)을 얻습니다.
// 4. 논리 부정 연산자의 결과에 단항 덧셈 연산자(+)를 적용하여 불리언 값을 숫자로 변환합니다. 거짓(false)은 0으로, 참(true)은 1로 변환됩니다.
// 5. 변환된 값을 반환합니다.
    
// 즉, 해당 함수는 'number'를 'n'과 'm'으로 모두 나누어 떨어지는지 확인하여, 나누어 떨어지면 1(참)을 반환하고, 그렇지 않으면 0(거짓)을 반환합니다.
