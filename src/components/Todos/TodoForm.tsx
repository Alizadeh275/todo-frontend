import Button from "../../shared/components/Button";

type TodoFormProps = {
    newTodo: string;
    setNewTodo: (value: string) => void;
    handleAddTodo: (e: React.FormEvent) => void;
};

export default function TodoForm(
    { newTodo, setNewTodo, handleAddTodo }: TodoFormProps
) {

    return <>
        <form onSubmit={handleAddTodo} className="flex mb-4 gap-2">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="کار جدید اضافه کن"
                className="flex-1 p-2 border rounded-md"
            />
            <Button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
                اضافه کردن
            </Button>
        </form>
    </>
}