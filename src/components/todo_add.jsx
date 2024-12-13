import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const ToDoAdd = ({ onAdd }) => {
  const [error, setError] = useState(null);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSave = (data) => {
    axios.post("http://localhost:4000/todos", data).then((res) => {
      onAdd(res.data);
    });
    reset();
  };

  return (
    <div className="mb-6 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Add To Do</h1>
      <form onSubmit={handleSubmit(handleSave)} className="space-y-4">
        <p id="message" className="text-red-500 text-sm">
          {error}
        </p>

        <div>
          <label
            htmlFor="text"
            className="block text-gray-700 text-sm font-medium"
          >
            Text
          </label>
          {errors.text && (
            <p className="text-red-500 text-sm">{errors.text.message}</p>
          )}
          <input
            id="text"
            {...register("text", { required: "Please fill the text field" })}
            type="text"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-medium"
          >
            Description
          </label>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
          <input
            id="description"
            {...register("description", {
              required: "Please fill the description field",
            })}
            type="text"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};
