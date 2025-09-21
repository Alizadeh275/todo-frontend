import type { Todo } from "../api/todos";

type TodoListProps = {
    todos: Todo[];
    handleToggle: (todo: Todo) => void;
    handleDelete: (id: number) => void;
};

export default function TodoList({ todos, handleToggle, handleDelete }: TodoListProps) {
    return (
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
    );
}
