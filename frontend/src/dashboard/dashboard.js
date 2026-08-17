import React from "react";

function Dashboard() {
  const stats = [
    { title: "Total Users", value: "24.8k", change: "+12.3%", color: "bg-blue-500" },
    { title: "Revenue", value: "$84.2k", change: "+8.2%", color: "bg-emerald-500" },
    { title: "Pending Tasks", value: "18", change: "-3.1%", color: "bg-amber-500" },
  ];

  const activities = [
    { title: "New user registered", time: "10 min ago", avatar: "U" },
    { title: "Invoice paid", time: "1 hour ago", avatar: "$" },
    { title: "Project updated", time: "3 hours ago", avatar: "P" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">Overview</p>
            <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
          </div>
          <button className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            + New Report
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.title} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className={`mb-3 h-2 w-12 rounded-full ${stat.color}`} />
              <p className="text-sm text-slate-500">{stat.title}</p>
              <div className="mt-2 flex items-end justify-between">
                <h3 className="text-2xl font-semibold text-slate-900">{stat.value}</h3>
                <span className="text-sm font-medium text-emerald-600">{stat.change}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Revenue</h2>
                <p className="text-sm text-slate-500">Last 30 days</p>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                +8.2%
              </span>
            </div>
            <div className="flex h-48 items-end gap-3 rounded-xl bg-slate-50 p-4">
              {[40, 65, 55, 80, 72, 92, 84].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">Recent Activity</h2>
            <ul className="space-y-4">
              {activities.map((activity) => (
                <li key={activity.title} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                    {activity.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">{activity.title}</p>
                    <p className="text-sm text-slate-500">{activity.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
