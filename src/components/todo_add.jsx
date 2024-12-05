import { useState } from "react";

export const ToDoAdd = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleSave = () => {
    if (!text.trim()) {
      return setError("Plese fill all the fields");
    }
    setError(error);
    onAdd(text);
    setText("")
  };

  return (
    <div className="mb-6 flex space-x-2">
      {error && <p className="bg-red-400 p-2 my-1">{error}</p>}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new task"
      />
      <button
        onClick={handleSave}
        className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
      >
        Save
      </button>
    </div>
  );
};
