function solution(ineq, eq, n, m) {
    let answer = 0
 
 if(ineq == "<" && eq == "=") {
            if(n <= m) answer = 1;
        }
        else if(ineq == "<" && eq == "!") {
            if(n < m) answer = 1;
        }
        else if(ineq == ">" && eq == "=") {
            if(n >= m) answer = 1;
        }
        else if(ineq == ">" && eq == "!") {
            if(n > m) answer = 1;
        }
        else answer = 0;
    
        return answer;
    
}