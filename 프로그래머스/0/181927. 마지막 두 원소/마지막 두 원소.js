function solution(num_list) {
    let n = num_list.length;
    let a = num_list[n-1];
    let b = num_list[n-2];

    
    if (a>b ) {
      num_list.push(a-b);
    }
    else {
     num_list.push(2*a);
    }
    
    return num_list
}