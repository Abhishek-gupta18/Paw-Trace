import {
  Clock,
  MapPin,
  ChevronRight,
} from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Luna",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500",
    location: "Sector 18, Noida",
    status: "Pending",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Bella",
    image:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=500",
    location: "Gurgaon",
    status: "Matched",
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Milo",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500",
    location: "Delhi",
    status: "In Progress",
    time: "3 days ago",
  },
];

const statusStyles = {
  Pending: "bg-orange-100 text-orange-600",
  Matched: "bg-green-100 text-green-600",
  "In Progress": "bg-blue-100 text-blue-600",
};

export default function RecentCatReports() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Recent Reports
          </h2>

          <p className="text-slate-500 text-sm">
            Latest lost cat reports
          </p>

        </div>

        <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold">
          View All
          <ChevronRight size={18} />
        </button>

      </div>

      {/* Reports */}

      <div className="space-y-5">

        {reports.map((report) => (

          <div
            key={report.id}
            className="flex items-center justify-between border rounded-2xl p-4 hover:shadow-md transition"
          >

            <div className="flex items-center gap-4">

              <img
                src={report.image}
                alt={report.name}
                className="w-20 h-20 rounded-2xl object-cover"
              />

              <div>

                <h3 className="font-bold text-lg">
                  {report.name}
                </h3>

                <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">

                  <Clock size={14} />

                  {report.time}

                </div>

                <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">

                  <MapPin size={14} />

                  {report.location}

                </div>

              </div>

            </div>

            <div className="text-right">

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[report.status]}`}
              >
                {report.status}
              </span>

              <button className="block mt-4 text-orange-500 hover:text-orange-600 font-semibold">
                View →
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}