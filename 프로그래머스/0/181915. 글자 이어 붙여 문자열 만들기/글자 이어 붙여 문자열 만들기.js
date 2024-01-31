function solution(my_string, index_list) {
    var answer = '';
    return index_list.map(index => my_string[index]).join('');
}