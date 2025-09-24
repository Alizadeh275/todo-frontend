import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Todo } from "../../api/todos";
import TodoItem from "./TodoItem";

type SortableTodoItemProps = {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: number) => void;
};

export default function SortableTodoItem({ todo, onToggle, onDelete }: SortableTodoItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: todo.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mb-2 flex items-center gap-2 cursor-grab active:cursor-grabbing"
    >
      <TodoItem todo={todo} onToggle={onToggle} handleDelete={onDelete} />
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 text-sm"
      >
        حذف
      </button>
    </div>
  );
}
