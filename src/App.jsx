import { useState } from 'react';
import { ToDoList } from './components/todo_list';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <ToDoList />
    </div>
  );
}

export default App;

