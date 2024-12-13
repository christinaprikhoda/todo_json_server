import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { List } from "./list";
import { ToDoAdd } from "./todo_add";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/todos").then((res) => {
      setToDos(res.data)
    });
  }, []);

  const addNewToDo = (newTodo) => {
  
    setToDos([...toDos, newTodo]);
  };

  const deleteTodo = (item) => {
    const filtered = toDos.filter((todo) => todo.id !== item.id);
    setToDos(filtered);
    toast("The todo has been deleted.");
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
      <ToastContainer />
    </div>
  );
};
