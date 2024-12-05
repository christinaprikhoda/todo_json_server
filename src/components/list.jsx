import { ToDoItem } from "./todo_item";

export const List = ({ items, onDelete, onComplited }) => {
  return (
    <div className="space-y-3">
      {items.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onDelete={onDelete} onComplited={onComplited} />
      ))}
    </div>
  );
};
