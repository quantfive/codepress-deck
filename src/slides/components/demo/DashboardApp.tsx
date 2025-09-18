import { useEffect, useState } from "react";

type DemoStats = {
  metrics: {
    activeUsers: number;
    newSignups: number;
    revenue: number;
    conversionRate: number;
  };
  topPages: { path: string; views: number; avgTime: string }[];
  recentEvents: { id: string; user: string; action: string; time: string }[];
  updatedAt: string;
};

export default function DashboardApp() {
  const [stats, setStats] = useState<DemoStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/demo-stats", { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load stats (${res.status})`);
        const data: DemoStats = await res.json();
        if (!cancelled) setStats(data);
      } catch (e: unknown) {
        if (!cancelled) setError((e as Error).message);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="grid gap-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Active users"
          value={stats?.metrics.activeUsers?.toLocaleString() ?? "—"}
        />
        <MetricCard
          label="New signups"
          value={stats?.metrics.newSignups?.toLocaleString() ?? "—"}
        />
        <MetricCard
          label="Revenue"
          value={stats ? `$${stats.metrics.revenue.toLocaleString()}` : "—"}
        />
        <MetricCard
          label="Conversion rate"
          value={stats ? `${stats.metrics.conversionRate.toFixed(2)}%` : "—"}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white overflow-hidden">
          <div className="px-5 py-4 border-b font-medium">Top pages</div>
          <div className="p-5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-[#666]">
                <tr>
                  <th className="py-2 pr-3">Path</th>
                  <th className="py-2 pr-3">Views</th>
                  <th className="py-2">Avg. time</th>
                </tr>
              </thead>
              <tbody>
                {stats?.topPages?.map((row) => (
                  <tr key={row.path} className="border-t">
                    <td className="py-2 pr-3 font-medium">
                      <code>{row.path}</code>
                    </td>
                    <td className="py-2 pr-3">{row.views}</td>
                    <td className="py-2">{row.avgTime}</td>
                  </tr>
                ))}
                {!stats && (
                  <tr className="border-t">
                    <td colSpan={3} className="py-3 text-[#666]">
                      {isLoading ? "Loading…" : error ?? "No data"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border bg-white overflow-hidden">
          <div className="px-5 py-4 border-b font-medium">Recent events</div>
          <ul className="p-3 grid gap-1">
            {stats?.recentEvents?.map((evt) => (
              <li
                key={evt.id}
                className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 hover:bg-black/5"
                data-event-id={evt.id}
              >
                <div className="grid">
                  <span className="text-sm">
                    <strong>{evt.user}</strong> {evt.action}
                  </span>
                  <span className="text-xs text-[#666]">{evt.time}</span>
                </div>
                <span className="text-xs text-[#666]">#{evt.id}</span>
              </li>
            ))}
            {!stats && (
              <li className="text-sm text-[#666] px-3 py-2">
                {isLoading ? "Loading…" : error ?? "No data"}
              </li>
            )}
          </ul>
        </div>
      </div>

      {stats && (
        <div className="text-xs text-[#666]">Updated {stats.updatedAt}</div>
      )}
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-5 grid gap-1">
      <div className="text-xs text-[#666]">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}
