import { useState } from "react";
import useTodos from "./hooks/useTodos";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const { todos, loading, handleAdd, handleDelete, handleToggle } = useTodos();

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAdd(newTodo);
    setNewTodo("");
  };

  if (loading)
    return <div className="p-4 mx-auto text-center">درحال بارگذاری...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-iran mb-4">لیست کارها</h1>

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
  );
}

export default App;
