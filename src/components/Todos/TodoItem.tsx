import type { Todo } from "../../api/todos";
import Button from "../../shared/components/Button";

type TodoItemProps = {
    todo: Todo;
    onToggle: (todo: Todo) => void;
    handleDelete: (id: number) => void;

};

const COLORS = [
    "bg-pink-100 text-pink-800",
    "bg-purple-100 text-purple-800",
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-red-100 text-red-800",
    "bg-indigo-100 text-indigo-800",
    "bg-teal-100 text-teal-800",
    "bg-orange-100 text-orange-800",
    "bg-cyan-100 text-cyan-800",
];

export default function TodoItem({ todo, onToggle, handleDelete }: TodoItemProps) {
    const colorClass = COLORS[todo.id % COLORS.length];

    return (
        <li key={todo.id} className={`flex justify-between items-center 
            cursor-pointer
            p-2 border rounded-md ${colorClass}                   
            transition-transform transform 
                  hover:scale-101 hover:shadow-lg 
                  duration-200 ease-out`}>
            <span
                className={`px-3 py-1 rounded ${colorClass} 
                  ${todo.completed ? "line-through opacity-60" : ""}`}
                onClick={() => onToggle(todo)}
            >
                {todo.todo}
            </span>
            <Button className="cursor-pointer" onClick={() => handleDelete(todo.id)}>❌</Button>

        </li>

    );
}
