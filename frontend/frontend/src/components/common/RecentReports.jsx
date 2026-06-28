import {
  Cat,
  Clock3,
  MapPin,
  Eye,
} from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Luna",
    breed: "Persian",
    location: "Sector 18, Noida",
    time: "10 mins ago",
    status: "High Priority",
    color: "bg-red-100 text-red-600",
  },
  {
    id: 2,
    name: "Milo",
    breed: "Orange Tabby",
    location: "Connaught Place",
    time: "35 mins ago",
    status: "AI Match",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    name: "Bella",
    breed: "British Shorthair",
    location: "Indirapuram",
    time: "1 hour ago",
    status: "Volunteer Assigned",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    name: "Leo",
    breed: "Siamese",
    location: "Rajouri Garden",
    time: "2 hours ago",
    status: "Searching",
    color: "bg-orange-100 text-orange-600",
  },
];

export default function RecentReports() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm h-[500px] flex flex-col">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Recent Reports
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Latest lost cat reports
          </p>
        </div>

        <button className="text-orange-500 text-sm font-semibold hover:underline">
          View All
        </button>

      </div>

      {/* List */}

      <div className="flex-1 overflow-y-auto p-5 space-y-4">

        {reports.map((report) => (
          <div
            key={report.id}
            className="border border-slate-100 rounded-2xl p-4 hover:shadow-lg transition duration-300"
          >
            <div className="flex gap-4">

              {/* Avatar */}

              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">

                <Cat className="text-orange-500" size={28} />

              </div>

              {/* Details */}

              <div className="flex-1">

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="font-bold text-slate-800">
                      {report.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {report.breed}
                    </p>

                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${report.color}`}
                  >
                    {report.status}
                  </span>

                </div>

                <div className="mt-4 space-y-2">

                  <div className="flex items-center gap-2 text-sm text-slate-500">

                    <MapPin size={16} />

                    {report.location}

                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">

                    <Clock3 size={16} />

                    {report.time}

                  </div>

                </div>

                <button className="mt-4 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl text-sm transition">

                  <Eye size={16} />

                  View Report

                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}