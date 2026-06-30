import {
  CalendarDays,
  Cat,
  Heart,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const cats = [
  {
    id: 1,
    name: "Misty",
    breed: "Persian",
    age: "2 years",
    status: "Safe at home",
    location: "Sector 18, Noida",
    lastCheckup: "Checked 4 days ago",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    name: "Simba",
    breed: "Orange Tabby",
    age: "1 year",
    status: "Profile active",
    location: "Indirapuram",
    lastCheckup: "Updated yesterday",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 3,
    name: "Coco",
    breed: "British Shorthair",
    age: "3 years",
    status: "Microchip added",
    location: "Rajouri Garden",
    lastCheckup: "Checked last week",
    color: "bg-blue-100 text-blue-600",
  },
];

export default function MyCatsSection() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm h-[420px] flex flex-col">
      <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            My Cats
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Saved cat profiles and safety status
          </p>
        </div>

        <button className="text-orange-500 text-sm font-semibold hover:underline">
          Add Cat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {cats.map((cat) => (
          <div
            key={cat.id}
            className="border border-slate-100 rounded-2xl p-4 hover:shadow-lg transition duration-300"
          >
            <div className="flex gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Cat className="text-orange-500" size={30} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-3 items-start">
                  <div>
                    <h3 className="font-bold text-slate-800">
                      {cat.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {cat.breed} - {cat.age}
                    </p>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cat.color}`}>
                    {cat.status}
                  </span>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} />
                    {cat.location}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays size={16} />
                    {cat.lastCheckup}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-500">
                    <Heart size={13} className="fill-orange-400 text-orange-400" />
                    Owner profile
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    <ShieldCheck size={13} />
                    Rescue-ready info
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
