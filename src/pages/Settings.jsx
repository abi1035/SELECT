import { useState } from "react";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Preferences */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Preferences</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-700">Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-12 h-6 rounded-full transition ${
              darkMode ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                darkMode ? "translate-x-6" : ""
              }`}
            ></span>
          </button>
        </div>
      </section>

      
<section>
  <h2 className="text-lg font-semibold mb-2">Security</h2>
  <div className="flex flex-wrap gap-2">
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
      Change Password
    </button>
    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
      Logout
    </button>
  </div>
</section>
    </div>
  );
}
