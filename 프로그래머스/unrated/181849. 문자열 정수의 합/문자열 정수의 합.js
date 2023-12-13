function solution(num_str) {
    return num_str.split('').reduce((a, v) => a + parseInt(v, 10), 0);
}