import {
  ResponsiveContainer,
  BarChart, Bar,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const DATASETS = {
  activeUsers: [
    { label: "Jan", value: 240 }, { label: "Feb", value: 260 }, { label: "Mar", value: 255 },
    { label: "Apr", value: 280 }, { label: "May", value: 310 }, { label: "Jun", value: 295 },
    { label: "Jul", value: 330 }, { label: "Aug", value: 360 }, { label: "Sep", value: 345 }, { label: "Oct", value: 370 },
  ],
  transactions: [
    { label: "Jan", value: 12000 }, { label: "Feb", value: 13250 }, { label: "Mar", value: 12800 },
    { label: "Apr", value: 14100 }, { label: "May", value: 15800 }, { label: "Jun", value: 15200 },
    { label: "Jul", value: 17100 }, { label: "Aug", value: 18250 }, { label: "Sep", value: 17800 }, { label: "Oct", value: 19100 },
  ],
  signups: [
    { label: "Jan", value: 180 }, { label: "Feb", value: 210 }, { label: "Mar", value: 205 },
    { label: "Apr", value: 230 }, { label: "May", value: 260 }, { label: "Jun", value: 250 },
    { label: "Jul", value: 295 }, { label: "Aug", value: 320 }, { label: "Sep", value: 310 }, { label: "Oct", value: 335 },
  ],
  errors: [
    { label: "Jan", value: 40 }, { label: "Feb", value: 38 }, { label: "Mar", value: 36 },
    { label: "Apr", value: 34 }, { label: "May", value: 30 }, { label: "Jun", value: 28 },
    { label: "Jul", value: 26 }, { label: "Aug", value: 24 }, { label: "Sep", value: 22 }, { label: "Oct", value: 20 },
  ],
};


export function buildMetrics(d = DATASETS) {
  const sum = (arr) => arr.reduce((s, x) => s + (x?.value || 0), 0);
  return [
    { key: "activeUsers",  title: "Active Users",  value: sum(d.activeUsers).toLocaleString(),               subtext: "+5.2% this week", icon: <span>👥</span> },
    { key: "transactions", title: "Transactions",  value: "$" + sum(d.transactions).toLocaleString(),        subtext: "Today",           icon: <span>💳</span> },
    { key: "signups",      title: "New Signups",   value: sum(d.signups).toLocaleString(),                    subtext: "Last 24h",        icon: <span>➕</span> },
    { key: "errors",       title: "Errors Logged", value: sum(d.errors).toLocaleString(),                     subtext: "Past hour",       icon: <span>⚠️</span> },
  ];
}


export default function TrendChart({ data = [], title = "Trend", height = 260 }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>

      <div className="w-full" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis   dataKey="label" interval={0} tick={{ fontSize: 10 }}/>
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{ borderRadius: 8 }} labelStyle={{ fontWeight: 600 }} />
            <Legend />
            <Bar
              dataKey="value"
              name="Value"
              fill="#3B82F6"       
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
