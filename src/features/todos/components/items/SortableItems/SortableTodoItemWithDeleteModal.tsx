import { useState } from "react";
import type { Todo } from "../../../types/todos";
import Button from "../../../../../shared/components/Button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Eye, X } from "lucide-react";
import { getTodoColor } from "../../../../../shared/utils/colors";
import TodoDetailsModal from "../../modals/TodoDetailsRadixModal";
import DeleteConfirmationModal from "../../modals/TodoDeleteModal";

type TodoItemProps = {
    todo: Todo;
    onToggle: (todo: Todo) => void;
    onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    const colorClass = getTodoColor(todo.id);
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: todo.id });
    const style = { transform: CSS.Transform.toString(transform), transition };

    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <>
            <li
                ref={setNodeRef}
                style={style}
                {...attributes}
                className={`flex justify-between items-center p-2 mb-2 border rounded-md
                    ${colorClass} cursor-default transition-transform transform
                    hover:scale-103 hover:shadow-lg duration-200 ease-out
                    ${todo.completed ? "opacity-60" : ""}`}
            >
                <span
                    {...listeners}
                    className="mr-2 cursor-grab active:cursor-grabbing"
                    title="Drag"
                >
                    ☰
                </span>

                <span
                    className={`cursor-pointer flex-1 px-3 py-1 rounded ${todo.completed ? "line-through" : ""}`}
                    onClick={() => onToggle(todo)}
                >
                    {todo.todo}
                </span>

                <div className="flex gap-2">
                    <Button onClick={() => setShowDetailsModal(true)}>
                        <Eye className="w-5 h-5" />
                    </Button>
                    <Button onClick={() => setShowDeleteModal(true)}>
                        <X className="w-5 h-5" />
                    </Button>
                </div>
            </li>

            {showDetailsModal && (
                <TodoDetailsModal todo={todo} onClose={() => setShowDetailsModal(false)} />
            )}

            <DeleteConfirmationModal
                open={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={() => onDelete(todo.id)}
                todoTitle={todo.todo}
            />
        </>
    );
}
