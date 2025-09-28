import type { Todo } from "../../types/todos";
import Button from "../../../../shared/components/Button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type TodoItemProps = {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: number) => void;
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

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const colorClass = COLORS[todo.id % COLORS.length];

  // useSortable from @dnd-kit
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: todo.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}           // keep for accessibility
      className={`flex justify-between items-center p-2 mb-2 border rounded-md
                  ${colorClass} cursor-default transition-transform transform
                  hover:scale-103 hover:shadow-lg duration-200 ease-out
                  ${todo.completed ? "opacity-60" : ""}`}
    >
      {/* Drag handle */}
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

      <Button className="cursor-pointer" onClick={() => onDelete(todo.id)}>❌</Button>
    </li>

  );
}
