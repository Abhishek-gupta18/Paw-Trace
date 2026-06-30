import {
  FileText,
  Search,
  CheckCircle,
  Bot,
} from "lucide-react";

const stats = [
  {
    title: "Total Reports",
    value: "124",
    icon: FileText,
    color: "orange",
  },
  {
    title: "Lost Cats",
    value: "72",
    icon: Search,
    color: "red",
  },
  {
    title: "Found Cats",
    value: "38",
    icon: CheckCircle,
    color: "green",
  },
  {
    title: "AI Matches",
    value: "14",
    icon: Bot,
    color: "blue",
  },
];

export default function ReportsStats() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">

      {stats.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition"
          >

            <div className="flex justify-between">

              <div>

                <p className="text-slate-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

              </div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center
                ${
                  item.color === "orange"
                    ? "bg-orange-100"
                    : item.color === "red"
                    ? "bg-red-100"
                    : item.color === "green"
                    ? "bg-green-100"
                    : "bg-blue-100"
                }`}
              >

                <Icon
                  className={
                    item.color === "orange"
                      ? "text-orange-500"
                      : item.color === "red"
                      ? "text-red-500"
                      : item.color === "green"
                      ? "text-green-500"
                      : "text-blue-500"
                  }
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}