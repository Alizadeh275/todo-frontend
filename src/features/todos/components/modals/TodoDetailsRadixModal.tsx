import * as Dialog from "@radix-ui/react-dialog";
import type { Todo } from "../../types/todos";
import { X } from "lucide-react";

type TodoDetailsModalProps = {
    todo: Todo;
    onClose: () => void;
    open: boolean;
};

export default function TodoDetailsRadixModal({ open, todo, onClose }: TodoDetailsModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <Dialog.Portal>
                {/* Overlay */}
                <Dialog.Overlay className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm dark:bg-black/50" />

                {/* Content */}
                <Dialog.Content
                    className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 
                     rounded-lg bg-white p-6 shadow-xl focus:outline-none animate-in fade-in-50
                     dark:bg-gray-700 dark:text-gray-100 z-30"
                >
                    {/* Close Button */}
                    <Dialog.Close asChild>
                        <button
                            className="cursor-pointer absolute top-3 left-3 rounded-full p-1 
                            hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                    </Dialog.Close>

                    {/* Title */}
                    <Dialog.Title className="text-lg font-semibold mb-4 dark:text-white">
                        جزئیات کار
                    </Dialog.Title>

                    {/* Content */}
                    <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                        <p>
                            <span className="font-medium dark:text-gray-200">شناسه:</span> {todo.id}
                        </p>
                        <p>
                            <span className="font-medium dark:text-gray-200">عنوان:</span> {todo.todo}
                        </p>
                        <p>
                            <span className="font-medium dark:text-gray-200">وضعیت:</span>{" "}
                            {todo.completed ? "انجام‌شده ✅" : "ناتمام ⏳"}
                        </p>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
