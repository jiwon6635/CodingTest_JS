function solution(arr, delete_list) {
    return arr.filter((element, index) => !delete_list.includes(element));
}