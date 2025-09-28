import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import useTodos from "../hooks/useTodos";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/list/SortableTodoList";
import ErrorMessage from "../../../shared/components/ErrorMessage";
import AnalogClock from "../../clock/AnalogClockWithSkeleton";

function TodosContainer() {
    const [newTodo, setNewTodo] = useState("");
    const { todos, loading, error, handleAdd, handleDelete, handleToggle, handleReorder } = useTodos(6, 0);

    const handleAddTodo = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleAdd(newTodo);
        setNewTodo(""); // clear input after adding
    };

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

            <div className="max-w-md mx-auto mt-10 p-4 rounded-xl shadow-xl space-y-4">
                {/* Clock with its own loader */}
                <div className="flex justify-center mb-4">
                    <AnalogClock size={140} loading={loading} />
                </div>

                {/* Error message */}
                {error && <ErrorMessage text={error} />}

                {/* TodoForm with its own skeleton */}

                <TodoForm
                    loading={loading}
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    handleAddTodo={handleAddTodo}
                />


                {/* TodoList with its own skeletons */}

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