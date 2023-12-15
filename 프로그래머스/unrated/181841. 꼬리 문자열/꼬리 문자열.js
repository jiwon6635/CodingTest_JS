function solution(str_list, ex) {
    var list = str_list.filter(value => !value.includes(ex));
    return list = list.join('');
}