import React, { useEffect, useState } from "react";
import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  ReferenceLine,
  Legend,
} from "recharts";

const COLORS = {
  lost: "#E85D30",
  found: "#1D9E75",
  pending: "#E8834A",
  reunited: "#2ECC71",
  closed: "#9CA3AF",
};

function SummaryCards({ isVolunteer = false }) {
  const cards = [
    { title: "My Reports", value: 24, trend: "+3 this month" },
    { title: "Matches Found", value: 12, trend: "+2 this month" },
    { title: "Cats Reunited", value: 5, trend: "-" },
    { title: isVolunteer ? "Volunteer Hours" : "Community Saves", value: isVolunteer ? 18 : 9, trend: "+1" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      {cards.map((c) => (
        <div key={c.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sm text-gray-500">{c.title}</div>
              <div className="text-2xl font-bold text-[#1A1A2E]">{c.value}</div>
              <div className="text-sm text-green-600 mt-1">{c.trend}</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#E8834A] flex items-center justify-center text-white">🐾</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RingChartCard({ title, data, colors, centerText }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
      <div className="text-sm font-semibold text-[#1A1A2E] mb-2">{title}</div>
      <div style={{ width: "100%", height: 180 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={50} outerRadius={70} startAngle={90} endAngle={-270}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip wrapperStyle={{ borderRadius: 8 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-2">
        <div className="text-2xl font-bold text-[#1A1A2E]">{centerText}</div>
      </div>
      <div className="mt-3 text-sm text-gray-600">
        {data.map((d) => (
          <div key={d.name} className="flex justify-between">
            <div>{d.name}</div>
            <div>{d.value} ({Math.round((d.value / data.reduce((s, i) => s + i.value, 0)) * 100)}%)</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Analytics() {
  const [range, setRange] = useState("7d");
  const [location, setLocation] = useState("my-area");
  const [showCustom, setShowCustom] = useState(false);
  const [updatedAt, setUpdatedAt] = useState(new Date());

  // Mock data
  const statusData = [
    { name: "Active", value: 45 },
    { name: "Reunited", value: 22 },
    { name: "Closed", value: 8 },
  ];

  const typeData = [
    { name: "Lost", value: 85 },
    { name: "Found", value: 42 },
  ];

  const confidenceData = [
    { name: "High", value: 96 },
    { name: "Medium", value: 18 },
    { name: "Low", value: 6 },
  ];

  const lineData = Array.from({ length: 7 }).map((_, i) => ({
    date: `Day ${i + 1}`,
    lost: Math.round(5 + Math.random() * 10),
    found: Math.round(2 + Math.random() * 8),
  }));

  const timeOfDay = [
    { time: "6AM", count: 4 },
    { time: "9AM", count: 6 },
    { time: "12PM", count: 8 },
    { time: "3PM", count: 10 },
    { time: "6PM", count: 18 },
    { time: "9PM", count: 12 },
    { time: "12AM", count: 6 },
  ];

  const responseBins = [
    { name: "<5 mins", value: 12 },
    { name: "5–15 mins", value: 34 },
    { name: "15–30 mins", value: 20 },
    { name: "30–60 mins", value: 8 },
    { name: ">1 hr", value: 4 },
  ];

  useEffect(() => {
    // simulate data fetch on filter change
    setUpdatedAt(new Date());
  }, [range, location]);

  return (
    <div className="flex bg-[#FFFDF9] min-h-screen text-[#1A1A2E]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Topbar />

        {/* Top filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white border border-gray-200 rounded-2xl p-2 flex items-center gap-2">
              <select value={range} onChange={(e) => { setRange(e.target.value); setShowCustom(e.target.value === 'custom'); }} className="bg-transparent outline-none text-[#1A1A2E] px-3 py-2 rounded">
                <option value="7d">Last 7 days</option>
                <option value="30d">30 days</option>
                <option value="3m">3 months</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-2">
              <select value={location} onChange={(e) => setLocation(e.target.value)} className="bg-transparent outline-none text-[#1A1A2E] px-3 py-2 rounded">
                <option value="my-area">My Area</option>
                <option value="city">City</option>
                <option value="all">All India</option>
              </select>
            </div>

            {showCustom && (
              <div className="bg-white border border-gray-200 rounded-2xl p-3 text-gray-600">Custom date pickers</div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500">Updated {Math.round((new Date() - updatedAt) / 1000 / 60) === 0 ? 'just now' : `${Math.round((new Date() - updatedAt) / 1000 / 60)} mins ago`}</div>
            <button className="bg-[#E8834A] text-white px-4 py-2 rounded-2xl font-semibold">Export Report</button>
          </div>
        </div>

        {/* Summary cards */}
        <SummaryCards />

        {/* Ring charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <RingChartCard title="Report Status Breakdown" data={statusData} colors={[COLORS.pending, COLORS.reunited, COLORS.closed]} centerText={`${statusData.reduce((s, i) => s + i.value, 0)} total`} />
          <RingChartCard title="Cat Type Distribution" data={typeData} colors={[COLORS.lost, COLORS.found]} centerText={`${typeData.reduce((s, i) => s + i.value, 0)} total`} />
          <RingChartCard title="AI Match Confidence" data={confidenceData} colors={[COLORS.reunited, COLORS.pending, COLORS.closed]} centerText={`Avg 78%`} />
        </div>

        {/* Reports over time */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mt-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold text-[#1A1A2E]">Reports Over Time</div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-gray-100 text-[#1A1A2E] border border-gray-200 rounded-2xl">Lost</button>
              <button className="px-3 py-1 bg-gray-100 text-[#1A1A2E] border border-gray-200 rounded-2xl">Found</button>
              <button className="px-3 py-1 bg-gray-100 text-[#1A1A2E] border border-gray-200 rounded-2xl">Both</button>
            </div>
          </div>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
              <LineChart data={lineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip />
                <Area type="monotone" dataKey="lost" stroke={COLORS.lost} fill={COLORS.lost} fillOpacity={0.08} />
                <Area type="monotone" dataKey="found" stroke={COLORS.found} fill={COLORS.found} fillOpacity={0.06} />
                <Line type="monotone" dataKey="lost" stroke={COLORS.lost} dot />
                <Line type="monotone" dataKey="found" stroke={COLORS.found} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Two column charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <div className="text-lg font-semibold text-[#1A1A2E] mb-2">Reports by Time of Day</div>
            <div style={{ width: "100%", height: 220 }}>
              <ResponsiveContainer>
                <BarChart data={timeOfDay} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill={COLORS.pending} radius={[8,8,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-sm text-gray-600">Most cats go missing between 6PM – 9PM 🌙</div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-4">
            <div className="text-lg font-semibold text-[#1A1A2E] mb-2">Rescue Response Time Distribution</div>
            <div style={{ width: "100%", height: 220 }}>
              <ResponsiveContainer>
                <BarChart data={responseBins} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <ReferenceLine y={12} strokeDasharray="3 3" label={{ value: 'Avg: 12 mins', position: 'right' }} />
                  <Bar dataKey="value">{responseBins.map((b, i) => (
                    <Cell key={`bar-${i}`} fill={i === 0 ? '#2ECC71' : i === 1 ? '#8FD19E' : i === 2 ? '#E8834A' : i === 3 ? '#F27C4A' : '#E85D30'} />
                  ))}</Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Heatmap / Map toggle */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 mt-6">
          <div className="flex justify-between items-center mb-3">
            <div className="text-lg font-semibold text-[#1A1A2E]">Where cats go missing most</div>
            <div className="text-sm text-gray-600">Toggle: Grid / Map</div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-xs">
            {Array.from({ length: 7 }).map((_, r) => (
              <div key={r} className="grid grid-cols-24 gap-1">
                {Array.from({ length: 24 }).map((__, c) => (
                  <div key={c} className={`h-6 w-full bg-gradient-to-r from-yellow-50 to-[#E8834A]`} />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm text-gray-600">Darker = more reports in that time/area</div>
        </div>

        {/* Personal stats + leaderboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="col-span-1 bg-white border border-gray-200 rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">U</div>
              <div>
                <div className="font-semibold text-[#1A1A2E]">You</div>
                <div className="text-sm text-gray-500">Account active since Jan 2024</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
              <div>Reports submitted<div className="font-bold">24</div></div>
              <div>Reports resolved<div className="font-bold">75%</div></div>
              <div>AI matches<div className="font-bold">12</div></div>
              <div>Volunteer rescues<div className="font-bold">5</div></div>
            </div>
            <div className="mt-4 text-sm">Progress to Gold Rescuer</div>
            <div className="w-full bg-gray-100 rounded-full h-3 mt-2">
              <div className="bg-[#E8834A] h-3 rounded-full" style={{ width: '60%' }} />
            </div>
          </div>

          <div className="col-span-2 bg-white border border-gray-200 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-semibold text-[#1A1A2E]">Top Rescuers This Month 🏆</div>
              <a className="text-sm text-[#E8834A]" href="#">View Full Leaderboard</a>
            </div>
            <div className="divide-y">
              {[1,2,3,4,5,6,7,8,9,10].map((i) => (
                <div key={i} className={`flex items-center justify-between py-2 ${i===1? 'border-l-4 border-yellow-400' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">{i}</div>
                    <div>
                      <div className="font-semibold text-[#1A1A2E]">Rescuer {i}</div>
                      <div className="text-xs text-gray-500">Area {i}</div>
                    </div>
                  </div>
                  <div className="text-sm">{10-i+5} rescues</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
