function solution(arr1, arr2) {
    if (arr1.length !== arr2.length)  {
        return arr1.length > arr2.length ? 1 : -1
    }
    else {
        let sum1 = 0;
        let sum2 = 0;
        
        for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
        }
        
        for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
        }
        
        return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1
    }
}