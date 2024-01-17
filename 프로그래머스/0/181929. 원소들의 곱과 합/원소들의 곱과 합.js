function solution(num_list) {
    // 곱셈 연산이 적용되려면 초기값 1로 지정해야함
    var a=1; 
    var b=0;
    var c;
   for (i=0; i<num_list.length; i++) {
       a *= num_list[i];
       b += num_list[i];
   }
       c =b*b;
    
    if(a<c) {
           return 1;
       }
       else {
           return 0;
       }
}