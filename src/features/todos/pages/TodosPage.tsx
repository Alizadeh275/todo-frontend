import TodosContainer from "../containers/TodosContainer";
import AnalogClock from "../../clock/AnalogClock";

export default function TodosPage() {
    return (
        <div
            className="
          max-w-md mx-auto mt-5 p-4 rounded-xl shadow-xl space-y-4
          bg-white text-black
          dark:bg-gray-800 dark:text-white
          transition-colors
        "
        >
            {/* Clock */}
            <div className="flex justify-center mb-4">
                <AnalogClock size={140} />
            </div>
            <TodosContainer />
        </div>

    );
}
