import type { Todo } from "../../types/todos";
import Modal from "../../../../shared/components/Modal";

type TodoDetailsModalProps = {
    todo: Todo;
    onClose: () => void;
};

export default function TodoDetailsModal({
    todo,
    onClose,
}: TodoDetailsModalProps) {
    return (
        <Modal onClose={onClose}>
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">جزئیات کار</h2>

            <div className="space-y-3 text-md leading-6">
                <p>
                    <span className="font-medium text-gray-700">شناسه:</span>{" "}
                    <span className="text-gray-900">{todo.id}</span>
                </p>
                <p>
                    <span className="font-medium text-gray-700">عنوان:</span>{" "}
                    <span className="text-gray-900">{todo.todo}</span>
                </p>
                <p>
                    <span className="font-medium text-gray-700">وضعیت:</span>{" "}
                    <span
                        className={`${todo.completed ? "text-green-600 font-medium" : "text-yellow-600 font-medium"
                            }`}
                    >
                        {todo.completed ? "انجام‌شده ✅" : "ناتمام ⏳"}
                    </span>
                </p>
            </div>
        </Modal>
    );
}
