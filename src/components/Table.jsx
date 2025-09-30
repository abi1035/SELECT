import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";

export default function UserTable({ users = [] }) {
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");

  const statusStyles = useMemo(
    () => ({
      Active: "bg-green-100 text-green-700 ring-green-600/20",
      Invited: "bg-blue-100 text-blue-700 ring-blue-600/20",
      Suspended: "bg-red-100 text-red-700 ring-red-600/20",
      Inactive: "bg-gray-100 text-gray-700 ring-gray-600/20",
    }),
    []
  );

  // Apply filtering (name/email + role + status)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((u) => {
      const matchesQuery =
        !q ||
        u.name?.toLowerCase().includes(q) ||
        u.email?.toLowerCase().includes(q);
      const matchesRole = role === "All" || u.role === role;
      const matchesStatus = status === "All" || u.status === status;
      return matchesQuery && matchesRole && matchesStatus;
    });
  }, [users, query, role, status]);

  return (
    <div className="w-full">
      <SearchBar
        query={query} setQuery={setQuery}
        role={role} setRole={setRole}
        status={status} setStatus={setStatus}
        users={users}
      />

      <p className="mb-2 text-sm text-gray-500">
        Showing <span className="font-medium text-gray-700">{filtered.length}</span> of {users.length}
      </p>

      {/* Empty state */}
      {!filtered.length ? (
        <div className="w-full rounded-xl border border-dashed border-gray-300 p-8 text-center bg-white">
          <p className="text-gray-600">No matching users.</p>
        </div>
      ) : (
        <>
          {/* Mobile/cards (<= md) */}
          <ul className="md:hidden space-y-3">
            {filtered.map((u) => (
              <li key={u.id ?? u.email} className="rounded-xl border border-gray-200 p-4 bg-white">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={u.name} />
                    <div>
                      <p className="font-medium text-gray-900 leading-tight">{u.name}</p>
                      <p className="text-sm text-gray-500">{u.email}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[u.status] ?? statusStyles.Inactive}`}>
                    {u.status}
                  </span>
                </div>
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    {u.role}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Table (>= md) */}
          <div className="hidden md:block rounded-xl border border-gray-200 overflow-x-auto bg-white">
            <table className="min-w-full text-left">
              <thead className="bg-gray-50 text-gray-700 text-sm">
                <tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Status</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((u) => (
                  <tr key={u.id ?? u.email} className="hover:bg-gray-50">
                    <Td>
                      <div className="flex items-center gap-3">
                        <Avatar name={u.name} />
                        <span className="font-medium text-gray-900">{u.name}</span>
                      </div>
                    </Td>
                    <Td className="text-gray-700">{u.email}</Td>
                    <Td>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                        {u.role}
                      </span>
                    </Td>
                    <Td>
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[u.status] ?? statusStyles.Inactive}`}>
                        {u.status}
                      </span>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

/* Helpers */
function Th({ children }) {
  return <th scope="col" className="px-4 py-3 font-semibold">{children}</th>;
}
function Td({ children, className = "" }) {
  return <td className={`px-4 py-3 ${className}`}>{children}</td>;
}
function Avatar({ name = "" }) {
  const initials = name.split(" ").map(n => n?.[0] || "").join("").slice(0, 2).toUpperCase();
  return (
    <div className="h-9 w-9 shrink-0 rounded-full bg-gray-200 text-gray-700 grid place-items-center text-sm font-semibold">
      {initials || "U"}
    </div>
  );
}
