"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Button from "../../../../shared/components/Button";
import { X } from "lucide-react";

type DeleteConfirmationModalProps = {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    todoTitle?: string;
};

export default function DeleteConfirmationModal({
    open,
    onClose,
    onConfirm,
    todoTitle,
}: DeleteConfirmationModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <Dialog.Portal>
                {/* Overlay */}
                <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm dark:bg-black/60" />

                {/* Content */}
                <Dialog.Content
                    className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 
                               rounded-lg bg-white p-6 shadow-xl focus:outline-none
                               dark:bg-gray-700 dark:text-gray-100"
                >
                    {/* Close button */}
                    <Dialog.Close asChild>
                        <button
                            onClick={onClose}
                            className="cursor-pointer absolute top-3 left-3 rounded-full p-1 
                                       hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                    </Dialog.Close>

                    {/* Title */}
                    <Dialog.Title className="text-lg font-semibold mb-4 dark:text-white">
                        تأیید حذف
                    </Dialog.Title>

                    {/* Message */}
                    <p className="text-sm text-gray-700 mb-6 dark:text-gray-300">
                        آیا مطمئن هستید که می‌خواهید این مورد را حذف کنید؟
                        <br />
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                            {todoTitle}
                        </span>
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3">
                        <Button
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200
                                       dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                        >
                            انصراف
                        </Button>
                        <Button
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700
                                       dark:bg-red-700 dark:hover:bg-red-800"
                        >
                            حذف
                        </Button>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
