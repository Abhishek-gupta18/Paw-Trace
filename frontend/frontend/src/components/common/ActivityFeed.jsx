import {
  Bot,
  Users,
  Heart,
  MapPin,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "AI found a possible match",
    description: "Luna has a 96% visual match nearby.",
    time: "2 mins ago",
    icon: <Bot size={18} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Volunteer accepted the request",
    description: "Rahul Sharma is heading to the last location.",
    time: "12 mins ago",
    icon: <Users size={18} />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Cat reunited 🎉",
    description: "Bella has been reunited with her owner.",
    time: "1 hour ago",
    icon: <Heart size={18} />,
    color: "bg-orange-100 text-orange-500",
  },
  {
    id: 4,
    title: "New report submitted",
    description: "A new missing cat report was created in Noida.",
    time: "2 hours ago",
    icon: <MapPin size={18} />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 5,
    title: "Case Closed",
    description: "Leo's report has been successfully resolved.",
    time: "Yesterday",
    icon: <CheckCircle2 size={18} />,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm h-[420px] flex flex-col">

      {/* Header */}

      <div className="px-6 py-5 border-b border-slate-100">

        <h2 className="text-xl font-bold text-slate-800">
          Recent Activity
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Latest updates from the community
        </p>

      </div>

      {/* Timeline */}

      <div className="flex-1 overflow-y-auto px-6 py-5">

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-200"></div>

          {activities.map((activity) => (
            <div
              key={activity.id}
              className="relative flex gap-4 pb-8"
            >
              {/* Icon */}

              <div
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${activity.color}`}
              >
                {activity.icon}
              </div>

              {/* Content */}

              <div className="flex-1">

                <div className="flex justify-between items-start">

                  <h3 className="font-semibold text-slate-800">
                    {activity.title}
                  </h3>

                  <span className="text-xs text-slate-400 flex items-center gap-1">

                    <Clock3 size={14} />

                    {activity.time}

                  </span>

                </div>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  {activity.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}