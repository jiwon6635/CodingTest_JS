function solution(todo_list, finished) {
   let unfinishedTasks = todo_list
    .map((task, index) => ({ task, index }))
    .filter(({ index }) => !finished[index]);
            
 return unfinishedTasks.map(({ task }) => task);
}