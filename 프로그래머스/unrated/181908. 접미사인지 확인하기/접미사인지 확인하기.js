function solution(my_string, is_suffix) {
     if (my_string.length < is_suffix.length) {
        return 0;
    } else
    return my_string.slice(-(is_suffix.length)) === is_suffix ? 1 : 0;
}
