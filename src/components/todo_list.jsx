import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { List } from "./list";
import { ToDoAdd } from "./todo_add";

export const ToDoList = () => {
  const [toDos, setToDos] = useState([
    { id: uuidv4(), text: "Read a book", complited: false },
    { id: uuidv4(), text: "Eat a burger", complited: true },
    { id: uuidv4(), text: "Buy flowers", complited: false },
  ]);

  const addNewToDo = (text) => {
    const newToDo = {
      id: uuidv4(),
      text: text,
      complited: false,
    };
    setToDos([...toDos, newToDo]);
  };

  const deleteTodo = (item) => {
    const filtered = toDos.filter((todo) => todo.id !== item.id);
    setToDos(filtered);
  };

  const complitedToDo = (id) => {
    const mapped = toDos.map((item) =>
      item.id === id ? { ...item, complited: !item.complited } : item
    );

    setToDos(mapped);
  };
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        To-Do List
      </h1>
      <ToDoAdd onAdd={addNewToDo} />
      <List items={toDos} onDelete={deleteTodo} onComplited={complitedToDo} />
    </div>
  );
};
