import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Dashboard";
import UserPage from "./pages/Users";
import Reports from "./pages/Reports";
import SettingsPage from "./pages/Settings";



export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={open} onClose={() => setOpen(false)} />

        {/* Main */}
        <div className="flex-1 min-h-screen bg-gray-50 md:ml-0">
          {/* Top bar (mobile) */}
          <header className="md:hidden sticky top-0 z-30 bg-white border-b border-gray-200">
            <div className="flex items-center gap-3 p-3">
              <button
                className="rounded-lg p-2 hover:bg-gray-100"
                onClick={() => setOpen(true)}
                aria-label="Open sidebar"
              >
                ☰
              </button>
              <NavLink to="/" className="font-semibold">SELECT</NavLink>
            </div>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<UserPage />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}
