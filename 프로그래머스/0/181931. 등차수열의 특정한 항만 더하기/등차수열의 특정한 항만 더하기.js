function solution(a, d, included) {
    var arr =[];
    var sum = 0;
    for ( let i=0; i<included.length; i++) {
        if (included[i]) {
            var num = a + d * i;
            sum += num;
        }
    }
    return sum
}