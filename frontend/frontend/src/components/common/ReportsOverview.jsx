import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", Lost: 12, Found: 8, AI: 10 },
  { day: "Tue", Lost: 18, Found: 10, AI: 14 },
  { day: "Wed", Lost: 15, Found: 13, AI: 17 },
  { day: "Thu", Lost: 24, Found: 17, AI: 22 },
  { day: "Fri", Lost: 20, Found: 18, AI: 19 },
  { day: "Sat", Lost: 28, Found: 23, AI: 26 },
  { day: "Sun", Lost: 22, Found: 20, AI: 24 },
];

export default function ReportsOverview() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 h-[420px]">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Reports Overview
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Weekly report statistics
          </p>
        </div>

        <select className="border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>

      </div>

      {/* Legend */}

      <div className="flex gap-6 mb-5">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span className="text-sm text-slate-600">Lost Reports</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-sm text-slate-600">Reunited</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="text-sm text-slate-600">AI Matches</span>
        </div>

      </div>

      {/* Chart */}

      <ResponsiveContainer width="100%" height={280}>

        <AreaChart data={data}>

          <defs>

            <linearGradient id="lost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="found" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="ai" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>

          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="Lost"
            stroke="#f97316"
            fill="url(#lost)"
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="Found"
            stroke="#22c55e"
            fill="url(#found)"
            strokeWidth={3}
          />

          <Area
            type="monotone"
            dataKey="AI"
            stroke="#3b82f6"
            fill="url(#ai)"
            strokeWidth={3}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}