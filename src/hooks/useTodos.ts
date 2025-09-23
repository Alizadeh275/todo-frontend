import { useState, useEffect } from "react";
import type { Todo } from "../api/todos";
import { getTodos, addTodo, deleteTodo, toggleComplete } from "../api/todos";

export default function useTodos(initialLimit = 10, initialSkip = 0) {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);

    // Load todos on mount
    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async (limit = initialLimit, skip = initialSkip) => {
        setLoading(true);
        try {
            const data = await getTodos(limit, skip);
            setTodos(data.todos);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = async (todoText: string, userId = 1) => {
        if (!todoText.trim()) return;

        // Add new todo via API
        let created = await addTodo({ todo: todoText, userId, completed: false });
        // Generate unique ID for frontend
        created = { ...created, id: Math.round(Date.now() + Math.random()) };

        setTodos((prev) => [created, ...prev]);
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteTodo(id);
        } finally {
            setTodos((prev) => prev.filter((t) => t.id !== id));
        }
    };

    const handleToggle = async (todo: Todo) => {
        try {
            await toggleComplete(todo.id, !todo.completed);
        } finally {
            setTodos((prev) =>
                prev.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t
                )
            );
        }
    };

    return {
        todos,
        loading,
        loadTodos,
        handleAdd,
        handleDelete,
        handleToggle,
    };
}
