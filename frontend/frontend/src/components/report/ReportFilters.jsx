import {
  Search,
  
} from "lucide-react";

export default function ReportFilters() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6">

      <div className="grid lg:grid-cols-4 gap-4">

        {/* Search */}

        <div className="relative lg:col-span-2">

          <Search
            className="absolute left-4 top-4 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search by cat name..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 outline-none"
          />

        </div>

        {/* Status */}

        <select className="border border-slate-300 rounded-xl px-4">

          <option>All Status</option>

          <option>Pending</option>

          <option>Matched</option>

          <option>Resolved</option>

        </select>

        {/* Sort */}

        <select className="border border-slate-300 rounded-xl px-4">

          <option>Newest First</option>

          <option>Oldest First</option>

          <option>Highest Reward</option>

        </select>

      </div>

    </div>
  );
}