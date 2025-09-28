import {
  DndContext,
  closestCenter,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type { Todo } from "../../types/todos";
import SortableTodoItem from "../items/SortableItems/SortableTodoItemWithDeleteModal";
import { Skeleton } from "@mui/material";

type SortableTodoListProps = {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onDelete: (id: number) => void;
  onReorder: (oldIndex: number, newIndex: number) => void;
  loading?: boolean;
};

export default function SortableTodoList({
  todos,
  onToggle,
  onDelete,
  onReorder,
  loading = false,
}: SortableTodoListProps) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = todos.findIndex((t) => t.id === active.id);
      const newIndex = todos.findIndex((t) => t.id === over.id);
      onReorder(oldIndex, newIndex);
    }
  };

  const placeholderCount = 5;

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={todos.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        {loading
          ? Array.from({ length: placeholderCount }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="flex justify-between items-center p-1 mb-1"
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height={60} // height of full item
                animation="wave"
                style={{ borderRadius: 8 }}
              />
            </div>
          ))
          : todos.map((todo) => (
            <SortableTodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))
        }

      </SortableContext>
    </DndContext>
  );
}
