function solution(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 50 && arr[i] % 2 ===0) {
            result.push(arr[i] / 2)
        }
        else if (arr[i] < 50 && arr[i] %2 !== 0) {
            result.push(arr[i] * 2)
        }
        else {
            result.push(arr[i])
        }
    }
    return result;
    
}