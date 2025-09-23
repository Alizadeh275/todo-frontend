import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import useTodos from "./hooks/useTodos";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import ErrorMessage from "./shared/components/ErrorMessage";


function App() {
  const [newTodo, setNewTodo] = useState("");
  const { todos, loading, error, handleAdd, handleDelete, handleToggle } = useTodos();

  // Called when the form is submitted
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAdd(newTodo);
    setNewTodo(""); // clear input after adding
  };

  if (loading) return <div className="p-4 text-center">درحال بارگذاری...</div>;

  return (<>
    <ToastContainer
      position="top-right"   // options: top-right, top-left, top-center, bottom-right, bottom-left, bottom-center
      autoClose={3000}       // auto-close after 3 seconds
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={true}              // right-to-left (Persian)
      pauseOnHover
      draggable
    />
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-iran mb-4">لیست کارها</h1>

      {error && (
        <ErrorMessage text={error} />
      )}

      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />

      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    </div>
  </>

  );
}

export default App;
