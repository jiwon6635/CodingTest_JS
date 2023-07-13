function solution(a, b) {
    var answer = 0;
    const x = String(a)+String(b);
    const y = 2*a*b
    return  x>=y ? Number(x) : y
}