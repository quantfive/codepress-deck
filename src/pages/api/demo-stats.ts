import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Mock data; replace with real sources later
  const now = new Date();
  const data = {
    metrics: {
      activeUsers: 2483,
      newSignups: 187,
      revenue: 42130,
      conversionRate: 3.42,
    },
    topPages: [
      { path: "/", views: 12450, avgTime: "01:12" },
      { path: "/pricing", views: 8650, avgTime: "00:58" },
      { path: "/blog/launch", views: 4341, avgTime: "02:04" },
      { path: "/changelog", views: 2330, avgTime: "00:44" },
    ],
    recentEvents: [
      {
        id: "1001",
        user: "Alex",
        action: "invited a teammate",
        time: "2m ago",
      },
      { id: "1002", user: "Mia", action: "published a draft", time: "7m ago" },
      {
        id: "1003",
        user: "Sam",
        action: "updated pricing copy",
        time: "12m ago",
      },
      {
        id: "1004",
        user: "Jordan",
        action: "connected GitHub",
        time: "35m ago",
      },
    ],
    updatedAt: now.toLocaleString(),
  };
  res.status(200).json(data);
}

