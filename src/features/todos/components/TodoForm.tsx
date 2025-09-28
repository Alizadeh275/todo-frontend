import Button from "../../../shared/components/Button";
import Input from "../../../shared/components/Input";
import Skeleton from '@mui/material/Skeleton';

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
    if (loading) {
        // Skeleton version
        return (
            <div className="flex flex-col sm:flex-row mb-4 gap-2">
                <div className="flex-1 overflow-hidden">
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </div>
                <div className="overflow-hidden">
                    <Skeleton variant="rectangular" width={120} height={40} animation="wave" />
                </div>
            </div>
        );
    }

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
                className="flex-1 p-2 border rounded-md"
            />
            <Button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full sm:w-auto"
            >
                اضافه کردن
            </Button>
        </form>
    );
}
