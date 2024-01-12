function solution(rny_string) {
    if (rny_string.includes("m")) {
        return rny_string.replace(/m/g,"rn");
    }
    else return rny_string;
}