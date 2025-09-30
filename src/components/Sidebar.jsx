import { Link, NavLink } from "react-router-dom";

export default function Sidebar({ isOpen = false, onClose = () => {} }) {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/users", label: "Users" },
    { to: "/reports", label: "Reports" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <>
      {/* Overlay (mobile) */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 md:hidden transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer (mobile) + Static (md+) */}
      <aside
        className={[
          "fixed z-50 md:static md:z-auto",
          "h-screen w-64 bg-white border-r border-gray-200 p-4",
          "transition-transform md:transition-none",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
     
        <div className="flex items-center justify-between mb-6">
            <Link to="/" onClick={onClose}>
            <h1 className="text-xl font-bold cursor-pointer hover:text-blue-600 transition">
              SELECT
            </h1>
          </Link>
          <button
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end
              onClick={onClose}
              className={({ isActive }) =>
                [
                  "block rounded-lg px-3 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
