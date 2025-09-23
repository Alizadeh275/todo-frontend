import TodoItem from "./TodoItem";
import type { Todo } from "../../api/todos";
import Button from "../../shared/components/Button";

type TodoListProps = {
    todos: Todo[];
    handleToggle: (todo: Todo) => void;
    handleDelete: (id: number) => void;
};

export default function TodoList({ todos, handleToggle, handleDelete }: TodoListProps) {
    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <li key={todo.id} className="flex justify-between items-center p-2 border rounded-md">
                    <TodoItem todo={todo} onToggle={handleToggle} />
                    <Button className="cursor-pointer" onClick={() => handleDelete(todo.id)}>❌</Button>
                </li>
            ))}
        </ul>
    );
}

