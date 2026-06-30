import {
  MapPin,
  Clock,
  User,
  Bot,
  Eye,
  Heart,
  BadgeIndianRupee,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ReportCard({ report }) {
  const navigate = useNavigate();

  const statusColor = {
    Pending: "bg-orange-100 text-orange-600",
    Matched: "bg-green-100 text-green-600",
    Resolved: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">

      {/* Image */}

      <div className="relative">

        <img
          src={report.image}
          alt={report.name}
          className="w-full h-60 object-cover"
        />

        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-50">

          <Heart
            size={20}
            className="text-red-500"
          />

        </button>

        <span
          className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-semibold ${statusColor[report.status]}`}
        >
          {report.status}
        </span>

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex justify-between items-start">

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              {report.name}
            </h2>

            <p className="text-slate-500">
              {report.breed}
            </p>

          </div>

          <div className="bg-blue-50 px-3 py-2 rounded-xl flex items-center gap-2">

            <Bot
              size={18}
              className="text-blue-500"
            />

            <span className="font-semibold text-blue-600">
              {report.aiMatch}%
            </span>

          </div>

        </div>

        {/* Info */}

        <div className="space-y-3 mt-6">

          <div className="flex items-center gap-3 text-slate-600">

            <MapPin
              size={18}
              className="text-orange-500"
            />

            {report.location}

          </div>

          <div className="flex items-center gap-3 text-slate-600">

            <Clock
              size={18}
              className="text-orange-500"
            />

            {report.time}

          </div>

          <div className="flex items-center gap-3 text-slate-600">

            <User
              size={18}
              className="text-orange-500"
            />

            {report.owner}

          </div>

          <div className="flex items-center gap-3 text-slate-600">

            <BadgeIndianRupee
              size={18}
              className="text-green-500"
            />

            Reward : ₹{report.reward}

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-3 mt-8">

          <button
            onClick={() =>
              navigate(`/reports/${report.id}`)
            }
            className="flex-1 flex justify-center items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
          >

            <Eye size={18} />

            View Details

          </button>

        </div>

      </div>

    </div>
  );
}