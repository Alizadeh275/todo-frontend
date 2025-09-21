import { useEffect, useState } from "react";
import { getTodos, deleteTodo, toggleComplete, addTodo } from "./api/todos";
import type { Todo } from "./api/todos";

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
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleToggle = async (todo: Todo) => {
    await toggleComplete(todo.id, !todo.completed);
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    // استفاده از userId ثابت (مثلاً 1) چون DummyJSON نیاز داره
    const created = await addTodo({ todo: newTodo, userId: 1 });
    setTodos([created, ...todos]); // اضافه کردن به بالای لیست
    setNewTodo("");
  };

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-iran mb-4">لیست کارها </h1>

      {/* Form اضافه کردن todo */}
      <form onSubmit={handleAddTodo} className="flex mb-4 gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="flex-1 p-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          اضافه کردن
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded-md"
          >
            <span
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""
                }`}
              onClick={() => handleToggle(todo)}
            >
              {todo.todo}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:underline"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
