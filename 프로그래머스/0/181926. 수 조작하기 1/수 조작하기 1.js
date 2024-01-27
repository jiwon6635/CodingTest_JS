function solution(n, control) {
    let a=0;
    
    for(i=0; i<control.length; i++) {
        if (control[i] ==='w') {
            a=a+1;
        }
        else if(control[i] ==='s') {
            a=a-1;
        }
        else if(control[i] === 'd') {
            a=a+10
        }
        else {
            a=a-10
        }
    }
    return n+a;
}