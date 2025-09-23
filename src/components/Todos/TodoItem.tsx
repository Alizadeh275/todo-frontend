import type { Todo } from "../../api/todos";

type TodoItemProps = {
    todo: Todo;
    onToggle: (todo: Todo) => void;
};

export default function TodoItem({ todo, onToggle }: TodoItemProps) {
    return (
        <span
            className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""
                }`}
            onClick={() => onToggle(todo)}
        >
            {todo.todo}
        </span>
    );
}
