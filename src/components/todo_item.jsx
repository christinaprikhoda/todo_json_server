export const ToDoItem = ({
  todo: { id, text, complited },
  onDelete,
  onComplited,
}) => {
  const handleDelete = () => {
    onDelete({ id, text, complited });
  };

  const handleComplited = () => {
    onComplited(id);
  };
  return (
    <div className="flex justify-between items-center p-4 mb-3 bg-gray-50 border rounded-lg shadow-sm hover:bg-gray-100">
      <p
        className={`flex-1 text-lg ${
          complited ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {text}
      </p>
      <div className="flex space-x-2">
        <button
          onClick={handleComplited}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {complited ? "cancel" : "complited"}
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
