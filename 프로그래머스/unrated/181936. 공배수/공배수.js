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