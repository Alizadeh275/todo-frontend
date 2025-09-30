import Button from "../../../../shared/components/Button";
import Input from "../../../../shared/components/Input";
import TodoFormSkeleton from "./TodoFormSkeleton";

type TodoFormProps = {
    newTodo: string;
    setNewTodo: (value: string) => void;
    handleAddTodo: (e: React.FormEvent) => void;
    loading?: boolean; // optional loading prop
};

export default function TodoForm({
    newTodo,
    setNewTodo,
    handleAddTodo,
    loading = false,
}: TodoFormProps) {

    if (loading)
        return <TodoFormSkeleton />

    return (
        <form
            onSubmit={handleAddTodo}
            className="flex flex-col sm:flex-row mb-4 gap-2 shadow-xl"
        >
            <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="کار جدید اضافه کن"
                className="
                    flex-1 p-2 border rounded-md 
                    bg-white text-gray-800 border-gray-300 
                    dark:bg-gray-800 dark:text-white dark:border-gray-600
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    dark:focus:ring-blue-400"
            />

            <Button
                type="submit"
                className="
                    bg-blue-500 text-white px-4 py-2 rounded-md w-full sm:w-auto
                    hover:bg-blue-600 
                    dark:bg-blue-600 dark:hover:bg-blue-700
                "
            >
                اضافه کردن
            </Button>

        </form>
    );
}
