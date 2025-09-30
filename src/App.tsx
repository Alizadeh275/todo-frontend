import TodosContainer from "./features/todos/containers/TodosContainer";
import ThemeToggle from "./shared/components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      {/* Header with theme toggle */}
      <header className="flex justify-end p-4">
        <ThemeToggle />
      </header>

      {/* Main content */}
      <main className="p-4">
        <TodosContainer />
      </main>
    </div>
  );
}

export default App;
