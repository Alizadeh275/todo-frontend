import { useEffect, useState } from "react";
import { getTodos, deleteTodo, toggleComplete, addTodo } from "./api/todos";
import type { Todo } from "./api/todos";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    try {
      const data = await getTodos(10, 0);
      setTodos(data.todos);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id);

    }
    finally {
      setTodos(todos.filter((t) => t.id !== id));

    }
  };

  const handleToggle = async (todo: Todo) => {
    try {
      await toggleComplete(todo.id, !todo.completed);

    } finally {
      setTodos(
        todos.map((t) =>
          t.id === todo.id ? { ...t, completed: !t.completed } : t
        )
      );
    }

  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    // استفاده از userId ثابت (مثلاً 1) چون DummyJSON نیاز داره
    let created = await addTodo({ todo: newTodo, userId: 1, completed: false });
    created = { ...created, id: Math.round(Date.now() + Math.random()) }
    console.log(created)
    setTodos([created, ...todos]); // اضافه کردن به بالای لیست
    setNewTodo("");
  };

  if (loading) return <div className="p-4 mx-auto text-center">درحال بارگذاری...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-iran mb-4">لیست کارها </h1>

      <TodoForm
        newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />

      <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
