function solution(l, r) {
    let result = [];
    for (let num = l; num <= r; num++) {
        if (/^[05]+$/.test(num.toString())) {
            result.push(num);
        }
    }
    return result.length ? result : [-1];
}