function solution(strArr) {
    let result = [];
    for (i=0; i<strArr.length; i++) {
        if (i%2 === 0) {
            result.push(strArr[i] = strArr[i].toLowerCase());
        }
        else {
            result.push(strArr[i] = strArr[i].toUpperCase());
        }
    }
    return result
}