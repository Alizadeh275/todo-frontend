import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

import useTodos from "../hooks/useTodos";
import TodoForm from "../components/forms/TodoForm";
import TodoList from "../components/list/SortableTodoList";

function TodosContainer() {
  const [newTodo, setNewTodo] = useState("");
  const { todos, loading, handleAdd, handleDelete, handleToggle, handleReorder } = useTodos(10, 0);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAdd(newTodo);
    setNewTodo(""); // clear input after adding
  };

  return (
    <>

      <div>

        {/* TodoForm */}
        <TodoForm
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          handleAddTodo={handleAddTodo}
        />

        {/* TodoList */}
        <TodoList
          loading={loading}
          todos={todos}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onReorder={handleReorder}
        />
      </div>
    </>
  );
}

export default TodosContainer;
