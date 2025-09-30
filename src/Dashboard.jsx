import { useMemo, useState } from "react";
import UserTable from "./components/Table";
import { SummaryGrid } from "./components/SummaryCard";
import TrendChart, { DATASETS, buildMetrics } from "./components/TrendChart";

const DEMOUSERS = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Lee", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 3, name: "Abi Bee", email: "abibee@dubai.com", role: "Manager", status: "Invited" },
  { id: 4, name: "Kentucky Kenneth", email: "kennethKentuck@burger.com", role: "Staff", status: "Suspended" },
];

export default function Dashboard() {
  // which metric drives the chart
  const [activeKey, setActiveKey] = useState("activeUsers");

  // build metrics from datasets
  const metrics = useMemo(() => buildMetrics(DATASETS), []);

  // derive chart title + data from selected metric
  const { activeTitle, activeData } = useMemo(() => {
    const m = metrics.find((x) => x.key === activeKey) ?? metrics[0];
    return {
      activeTitle: m.title,
      activeData: DATASETS[activeKey] ?? [],
    };
  }, [activeKey, metrics]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
       
        <section>
          <h1 className="text-2xl font-bold mb-4">Overview</h1>
          <SummaryGrid items={metrics} activeKey={activeKey} onSelect={setActiveKey} />
        </section>

       
        <section>
          <h2 className="text-xl font-semibold mb-4">Trends</h2>
          <TrendChart title={activeTitle} data={activeData} />
        </section>

      
        <section>
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <UserTable users={DEMOUSERS} />
        </section>
      </div>
    </div>
  );
}
