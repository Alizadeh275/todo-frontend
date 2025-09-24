// hooks/useTodos.ts
import type { Todo } from "../api/todos";
import { addTodo, deleteTodo, toggleComplete } from "../api/todos";
import useFetch from "../shared/hooks/useFetch";
import { showToast } from "../shared/utils/toasts";

type TodosResponse = {
    todos: Todo[];
    total: number;
    limit: number;
    skip: number;
};

export default function useTodos(limit = 10, skip = 0) {
    const { data, loading, error, setData, setError } = useFetch<TodosResponse>(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
    );

    const todos = data?.todos || [];

    const handleAdd = async (todoText: string, userId = 1) => {
        if (!todoText.trim()) return;
        setError?.(null);
        try {
            let created = await addTodo({ todo: todoText, userId, completed: false });
            created = { ...created, id: Math.round(Date.now() + Math.random()) };

            setData?.({
                todos: [created, ...todos],
                total: (data?.total ?? 0) + 1,
                limit: data?.limit ?? limit,
                skip: data?.skip ?? skip,
            });
            showToast("کار با موفقیت اضافه شد!", "success");

        } catch (err: unknown) {
            if (err instanceof Error) setError?.("خطا در اضافه کردن کار: " + err.message);
            else setError?.("خطا در اضافه کردن کار");
            console.error(err);
            showToast("خطا در اضافه کردن کار!", "error");
        }
    };

    const handleDelete = async (id: number) => {
        setError?.(null);
        try {
            await deleteTodo(id);

            setData?.({
                todos: todos.filter((t) => t.id !== id),
                total: (data?.total ?? 0) - 1,
                limit: data?.limit ?? limit,
                skip: data?.skip ?? skip,
            });
            showToast("کار با موفقیت حذف شد!", "success");

        } catch (err: unknown) {
            showToast("خطا در حذف کار", "error");
            console.error(err);

        }
    };

    const handleToggle = async (todo: Todo) => {
        setError?.(null);
        try {
            await toggleComplete(todo.id, !todo.completed);

            setData?.({
                todos: todos.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t
                ),
                total: data?.total ?? 0,
                limit: data?.limit ?? limit,
                skip: data?.skip ?? skip,
            });
            showToast("کار با موفقیت بروز شد!", "success");

        } catch (err: unknown) {
            showToast("خطا در بروزرسانی وضعیت کار", "error")
            console.error(err);
        }
    };

    return { todos, loading, error, handleAdd, handleDelete, handleToggle };
}
