function solution(arr, n) {

    if (arr.length % 2 !== 0) {
        for(i=0; i<arr.length; i++) {
            i % 2 == 0 ? arr[i] = arr[i] + n : arr[i] ;
        }
    }
    else {
        for (i=0; i<arr.length; i++) {
            i % 2 !== 0 ? arr[i] = arr[i] + n : arr[i] ;
        }
    }
    return arr;
}