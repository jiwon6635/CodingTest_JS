function solution(num_list) {
    
    num_list.sort((a, b) => a - b);
    let arr = num_list.slice(5);
    
    return arr;
}