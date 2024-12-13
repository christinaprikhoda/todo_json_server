export const ToDoItem = ({
  todo: { id, text, description, complited },
  onDelete,
  onComplited,
}) => {
  const handleDelete = () => {
    onDelete({ id, text, description, complited });
  };

  const handleComplited = () => {
    onComplited(id);
  };
  return (
    <div className="flex flex-col p-4 mb-3 bg-gray-50 border rounded-lg shadow-sm hover:bg-gray-100">
      <p
        className={`text-lg font-medium ${
          complited ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {text}
      </p>
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}
      <div className="flex space-x-2 mt-4">
        <button
          onClick={handleComplited}
          className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {complited ? "Cancel" : "Complete"}
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
