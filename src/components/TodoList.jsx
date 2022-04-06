import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onUpdateStatus, filterValue }) => {
  const todosContent = todos
    .filter((todo) => todo.content.includes(filterValue))
    .map((todo) => (
      <TodoItem todo={todo} key={todo.id} onUpdateStatus={onUpdateStatus} />
    ));
  return (
    <div>{todos.length === 0 ? <p>Please add new task</p> : todosContent}</div>
  );
};
