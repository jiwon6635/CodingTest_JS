function solution(a, b) {
    const x = String(a) + String(b)
    const y = String(b) + String(a)
    return x >= y ? Number(x) : Number(y)
}
