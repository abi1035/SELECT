import { useMemo } from "react";

export default function SearchBar({
  query, setQuery,
  role, setRole,
  status, setStatus,
  users
}) {
  // Build role and status lists dynamically
  const { roleOptions, statusOptions } = useMemo(() => {
    const roles = new Set(users.map(u => u.role).filter(Boolean));
    const statuses = new Set(users.map(u => u.status).filter(Boolean));
    return {
      roleOptions: ["All", ...Array.from(roles).sort()],
      statusOptions: ["All", ...Array.from(statuses).sort()],
    };
  }, [users]);

  return (
    <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="flex w-full items-center gap-2 lg:max-w-sm rounded-xl border border-gray-200 bg-white px-3 py-2">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-gray-400">
          <path d="M15.5 15.5 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or email…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="role" className="text-sm text-gray-600">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
          >
            {roleOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="status" className="text-sm text-gray-600">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
          >
            {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
