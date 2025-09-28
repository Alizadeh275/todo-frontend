import * as Dialog from "@radix-ui/react-dialog";
import type { Todo } from "../../types/todos";
import { X } from "lucide-react";

type TodoDetailsModalProps = {
    todo: Todo;
    onClose: () => void;
};

export default function TodoDetailsRadixModal({ todo, onClose }: TodoDetailsModalProps) {
    return (
        <Dialog.Root open={true} onOpenChange={(open) => !open && onClose()}>
            <Dialog.Portal>
                {/* Overlay */}
                <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

                {/* Content */}
                <Dialog.Content
                    className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 
                     rounded-lg bg-white p-6 shadow-xl focus:outline-none animate-in fade-in-50"
                >
                    {/* Close button */}
                    <Dialog.Close asChild>
                        <button
                            onClick={onClose}
                            className="absolute top-3 left-3 rounded-full p-1 hover:bg-gray-100"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </Dialog.Close>

                    <Dialog.Title className="text-lg font-semibold mb-4">جزئیات کار</Dialog.Title>

                    <div className="space-y-2 text-md text-gray-700">
                        <p>
                            <span className="font-medium">شناسه:</span> {todo.id}
                        </p>
                        <p>
                            <span className="font-medium">عنوان:</span> {todo.todo}
                        </p>
                        <p>
                            <span className="font-medium">وضعیت:</span>{" "}
                            {todo.completed ? "انجام‌شده ✅" : "ناتمام ⏳"}
                        </p>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
