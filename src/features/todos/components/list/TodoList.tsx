import TodoItem from "../items/TodoItem";
import type { Todo } from "../../types/todos";

type TodoListProps = {
    todos: Todo[];
    handleToggle: (todo: Todo) => void;
    handleDelete: (id: number) => void;
};

export default function TodoList({ todos, handleToggle, handleDelete }: TodoListProps) {
    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <TodoItem todo={todo} onToggle={handleToggle} handleDelete={handleDelete} />
            ))}
        </ul>
    );
}

