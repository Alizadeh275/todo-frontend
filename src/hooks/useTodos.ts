import { useState, useEffect } from "react";
import type { Todo } from "../api/todos";
import { getTodos, addTodo, deleteTodo, toggleComplete } from "../api/todos";

export default function useTodos(initialLimit = 10, initialSkip = 0) {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // <-- error state

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async (limit = initialLimit, skip = initialSkip) => {
        setLoading(true);
        setError(null);
        try {
            const data = await getTodos(limit, skip);
            setTodos(data.todos);
        } catch (err: unknown) {
            if (err instanceof Error) setError(err.message);
            else setError("خطا در بارگذاری کارها");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = async (todoText: string, userId = 1) => {
        if (!todoText.trim()) return;
        setError(null);
        try {
            let created = await addTodo({ todo: todoText, userId, completed: false });
            created = { ...created, id: Math.round(Date.now() + Math.random()) };
            setTodos((prev) => [created, ...prev]);
        } catch (err: unknown) {
            if (err instanceof Error) setError("خطا در اضافه کردن کار" + err.message);
            else setError("خطا در اضافه کردن کار");
            console.error(err);
        }
    };

    const handleDelete = async (id: number) => {
        setError(null);
        try {
            await deleteTodo(id);
            setTodos((prev) => prev.filter((t) => t.id !== id));
        } catch (err: unknown) {
            if (err instanceof Error) setError("خطا در حذف کار" + err.message);
            else setError("خطا در حذف کار");
            console.error(err);
        }
    };

    const handleToggle = async (todo: Todo) => {
        setError(null);
        try {
            await toggleComplete(todo.id, !todo.completed);
            setTodos((prev) =>
                prev.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t
                )
            );
        } catch (err: unknown) {
            if (err instanceof Error) setError("خطا در بروزرسانی وضعیت کار:\n" + err.message);
            else setError("خطا در بروزرسانی وضعیت کار");
            console.error(err);
        }
    };

    return { todos, loading, error, loadTodos, handleAdd, handleDelete, handleToggle };
}
