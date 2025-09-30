
export function SummaryCard({ title, value, subtext, icon, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full text-left rounded-xl border bg-white p-4 shadow-sm transition",
        active ? "border-blue-300 ring-2 ring-blue-200" : "border-gray-200 hover:shadow-md"
      ].join(" ")}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className={["h-10 w-10 grid place-items-center rounded-lg",
          active ? "bg-blue-50 text-blue-600" : "bg-gray-50 text-gray-700"].join(" ")}>
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
            {value}
          </p>
          {subtext && <p className="text-xs text-gray-500 mt-0.5">{subtext}</p>}
        </div>
      </div>
    </button>
  );
}

export function SummaryGrid({ items = [], activeKey, onSelect }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((m) => (
        <SummaryCard
          key={m.key}
          {...m}
          active={m.key === activeKey}
          onClick={() => onSelect?.(m.key)}
        />
      ))}
    </div>
  );
}
