// hooks/useTodos.ts
import { arrayMove } from "@dnd-kit/sortable";

import useFetch from "../../../shared/hooks/useFetch";
import { showToast } from "../../../shared/utils/toasts";
import type { Todo, TodosResponse } from "../types/todos";
import { addTodo, deleteTodo, toggleComplete } from "../services/todos";



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


    const handleReorder = (oldIndex: number, newIndex: number) => {
        if (!data) return; // safety check: do nothing if data is not loaded
        const reordered = arrayMove(todos, oldIndex, newIndex);
        setData?.({
            ...data,
            todos: reordered,
        });
    };


    const handleDelete = async (id: number) => {
        setError?.(null);
        try {
            await deleteTodo(id);


        } catch (err: unknown) {
            console.log(err)
        } finally {
            setData?.({
                todos: todos.filter((t) => t.id !== id),
                total: (data?.total ?? 0) - 1,
                limit: data?.limit ?? limit,
                skip: data?.skip ?? skip,
            });
            showToast("کار با موفقیت حذف شد!", "success");
        }
    };

    const handleToggle = async (todo: Todo) => {
        setError?.(null);
        try {

            setData?.({
                todos: todos.map((t) =>
                    t.id === todo.id ? { ...t, completed: !t.completed } : t
                ),
                total: data?.total ?? 0,
                limit: data?.limit ?? limit,
                skip: data?.skip ?? skip,
            });
            showToast("وضعیت کار با موفقیت تغییر کرد!", "success");

        } catch (err: unknown) {
            console.error(err);
        } finally {
            await toggleComplete(todo.id, !todo.completed);

        }
    };

    return { todos, loading, error, handleAdd, handleDelete, handleToggle, handleReorder };
}
