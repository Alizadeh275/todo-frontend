// App.tsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodosContainer from "./features/todos/containers/TodosContainer";
import ThemeToggle from "./shared/components/ThemeToggle";
import ProfilePage from "./features/profile/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
        {/* Header with nav and theme toggle */}
        <header className="flex justify-between items-center p-4">
          <nav className="flex gap-4">
            <Link to="/" className="hover:underline">
              Todos
            </Link>
            <Link to="/profile" className="hover:underline">
              پروفایل
            </Link>
          </nav>
          <ThemeToggle />
        </header>

        {/* Main content */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<TodosContainer />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
