import ReportsHeader from "../../components/report/ReportsHeader";
import ReportsStats from "../../components/report/ReportsStat";
import ReportFilters from "../../components/report/ReportFilters";
import ReportCard from "../../components/report/ReportCard";

export default function Reports() {
  const reports = [
    {
      id: 1,
      name: "Luna",
      breed: "Persian",
      image:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800",
      location: "Sector 18, Noida",
      owner: "Himanshi Gupta",
      reward: 5000,
      aiMatch: 96,
      status: "Pending",
      time: "2 hours ago",
    },
    {
      id: 2,
      name: "Bella",
      breed: "Siamese",
      image:
        "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=800",
      location: "Gurgaon",
      owner: "Rahul Sharma",
      reward: 3000,
      aiMatch: 88,
      status: "Matched",
      time: "Yesterday",
    },
    {
      id: 3,
      name: "Milo",
      breed: "British Shorthair",
      image:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800",
      location: "Delhi",
      owner: "Priya Singh",
      reward: 7000,
      aiMatch: 92,
      status: "Resolved",
      time: "3 days ago",
    },
    {
      id: 4,
      name: "Oliver",
      breed: "Ragdoll",
      image:
        "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800",
      location: "Lucknow",
      owner: "Ankit Verma",
      reward: 2500,
      aiMatch: 90,
      status: "Pending",
      time: "5 days ago",
    },
    {
      id: 5,
      name: "Simba",
      breed: "Maine Coon",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800",
      location: "Kanpur",
      owner: "Neha Kapoor",
      reward: 4500,
      aiMatch: 94,
      status: "Matched",
      time: "1 week ago",
    },
    {
      id: 6,
      name: "Coco",
      breed: "Indian Billi",
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800",
      location: "Delhi",
      owner: "Riya Sharma",
      reward: 2000,
      aiMatch: 81,
      status: "Pending",
      time: "2 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}
        <ReportsHeader />

        {/* Statistics */}
        <div className="mt-8">
          <ReportsStats />
        </div>

        {/* Search & Filters */}
        <div className="mt-8">
          <ReportFilters />
        </div>

        {/* Report Cards */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mt-10">

          {reports.map((report) => (
            <ReportCard
              key={report.id}
              report={report}
            />
          ))}

        </div>

        {/* Pagination */}

        <div className="flex justify-center items-center gap-3 mt-12">

          <button className="px-5 py-2 rounded-xl border bg-white hover:bg-slate-100">
            Previous
          </button>

          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-xl ${
                page === 1
                  ? "bg-orange-500 text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button className="px-5 py-2 rounded-xl border bg-white hover:bg-slate-100">
            Next
          </button>

        </div>

      </div>

    </div>
  );
}