import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

import useTodos from "../../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoList from "./SortableTodoList";
import ErrorMessage from "../../shared/components/ErrorMessage";

function Todos() {
  const [newTodo, setNewTodo] = useState("");
  const { todos, loading, error, handleAdd, handleDelete, handleToggle, handleReorder } = useTodos();

  // Called when the form is submitted
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAdd(newTodo);
    setNewTodo(""); // clear input after adding
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <ClipLoader size={60} color="#3b82f6" />
      <span className="text-gray-700 text-lg">در حال دریافت داده‌ها...</span>
    </div>
  );

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={true}
        pauseOnHover
        draggable
      />
      <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-lg">
        <h1 className="text-2xl font-iran mb-4">لیست کارها</h1>

        {error && <ErrorMessage text={error} />}

        <TodoForm
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />

        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onReorder={handleReorder}
        />
      </div>
    </>
  );
}

export default Todos;
