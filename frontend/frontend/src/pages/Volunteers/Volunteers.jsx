import { useMemo, useState } from "react";
import {
  Award,
  Bell,
  CalendarDays,
  Cat,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Languages,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  UserPlus,
  Users,
  X,
  Zap,
} from "lucide-react";
import Sidebar from "../../components/common/Sidebar";
import Topbar from "../../components/common/Topbar";

const volunteers = [
  {
    id: "vol-1",
    name: "Aarav Sharma",
    avatar: "",
    status: "Available",
    locality: "Sector 18, Noida",
    city: "Noida",
    serviceRadius: 3,
    canFoster: true,
    rescuesCompleted: 127,
    rating: 4.9,
    experienceYears: 3,
    responseTime: "6 mins",
    joined: "March 2024",
    languages: ["Hindi", "English"],
    skills: ["First Aid", "Transport", "Cat Handling"],
    phone: "+91 98765 43210",
    email: "aarav@pawtrace.app",
    bio: "Calm field responder who helps with late evening searches, safe capture, and short foster handoffs.",
    certificates: ["Animal First Aid", "NGO Verified", "Top Volunteer"],
    history: [
      { title: "Bella reunited", time: "2 days ago" },
      { title: "Oreo rescued", time: "Yesterday" },
      { title: "Luna transported", time: "Today" },
    ],
  },
  {
    id: "vol-2",
    name: "Meera Iyer",
    avatar: "",
    status: "Available",
    locality: "Indirapuram",
    city: "Ghaziabad",
    serviceRadius: 5,
    canFoster: true,
    rescuesCompleted: 94,
    rating: 4.8,
    experienceYears: 2,
    responseTime: "8 mins",
    joined: "July 2024",
    languages: ["English", "Tamil", "Hindi"],
    skills: ["Foster Care", "Medication", "Night Rescue"],
    phone: "+91 99887 77665",
    email: "meera@pawtrace.app",
    bio: "Experienced foster volunteer with a spare quarantine room and transport support on weekends.",
    certificates: ["Foster Verified", "NGO Verified"],
    history: [
      { title: "Simba fostered", time: "1 day ago" },
      { title: "Misty medicated", time: "4 days ago" },
      { title: "Coco reunited", time: "Last week" },
    ],
  },
  {
    id: "vol-3",
    name: "Kabir Khan",
    avatar: "",
    status: "Busy",
    locality: "Connaught Place",
    city: "Delhi",
    serviceRadius: 4,
    canFoster: false,
    rescuesCompleted: 68,
    rating: 4.7,
    experienceYears: 2,
    responseTime: "11 mins",
    joined: "January 2025",
    languages: ["Hindi", "English", "Urdu"],
    skills: ["Transport", "Search Coordination"],
    phone: "+91 91234 56780",
    email: "kabir@pawtrace.app",
    bio: "Fast city responder who coordinates sighting verification and safe pickup across central Delhi.",
    certificates: ["NGO Verified"],
    history: [
      { title: "Max sighting verified", time: "Today" },
      { title: "Nori picked up", time: "3 days ago" },
      { title: "Milo route checked", time: "Last week" },
    ],
  },
  {
    id: "vol-4",
    name: "Ananya Gupta",
    avatar: "",
    status: "Offline",
    locality: "Rajouri Garden",
    city: "Delhi",
    serviceRadius: 7,
    canFoster: true,
    rescuesCompleted: 112,
    rating: 4.9,
    experienceYears: 4,
    responseTime: "15 mins",
    joined: "November 2023",
    languages: ["Hindi", "English", "Punjabi"],
    skills: ["Cat Handling", "Foster Care", "First Aid"],
    phone: "+91 90909 11223",
    email: "ananya@pawtrace.app",
    bio: "Senior volunteer for cautious cats, temporary care, and family reunions after medical checks.",
    certificates: ["Animal First Aid", "Top Volunteer"],
    history: [
      { title: "Tara reunited", time: "5 days ago" },
      { title: "Leo fostered", time: "Last week" },
      { title: "Pixie trapped safely", time: "2 weeks ago" },
    ],
  },
  {
    id: "vol-5",
    name: "Rohan Mehta",
    avatar: "",
    status: "Available",
    locality: "Sector 21, Noida",
    city: "Noida",
    serviceRadius: 8,
    canFoster: false,
    rescuesCompleted: 53,
    rating: 4.6,
    experienceYears: 1,
    responseTime: "9 mins",
    joined: "April 2025",
    languages: ["Hindi", "English"],
    skills: ["Transport", "Night Rescue"],
    phone: "+91 88776 65544",
    email: "rohan@pawtrace.app",
    bio: "Available for quick transport and late night location checks near Noida expressway sectors.",
    certificates: ["NGO Verified"],
    history: [
      { title: "Mochi pickup accepted", time: "12 mins ago" },
      { title: "Snowy transported", time: "Yesterday" },
      { title: "Amber sighting logged", time: "3 days ago" },
    ],
  },
];

const relayRequests = [
  {
    id: "relay-1",
    catName: "Mochi",
    location: "Sector 21, Noida",
    postedAt: "12 mins ago",
    priority: "High Priority",
    status: "En Route",
    assignedVolunteer: "Rohan",
  },
  {
    id: "relay-2",
    catName: "Luna",
    location: "Sector 18, Noida",
    postedAt: "28 mins ago",
    priority: "Medium",
    status: "Volunteer Assigned",
    assignedVolunteer: "Aarav",
  },
  {
    id: "relay-3",
    catName: "Oreo",
    location: "Indirapuram",
    postedAt: "45 mins ago",
    priority: "Low",
    status: "Spotted",
    assignedVolunteer: "",
  },
];

const stats = [
  {
    title: "Total Volunteers",
    value: "286",
    support: "+18 joined this week",
    trend: "12%",
    icon: Users,
    iconClass: "bg-orange-100 text-orange-500",
  },
  {
    title: "Active Volunteers",
    value: "73",
    support: "Available nearby",
    trend: "Live",
    icon: HeartHandshake,
    iconClass: "bg-green-100 text-green-600",
    pulse: true,
  },
  {
    title: "Completed Rescues",
    value: "1,482",
    support: "This month: +92",
    trend: "Strong",
    icon: Cat,
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    title: "Avg Response Time",
    value: "8 mins",
    support: "Faster than last week",
    trend: "Down",
    icon: Zap,
    iconClass: "bg-purple-100 text-purple-600",
  },
];

const statuses = ["All", "Available", "Busy", "Offline"];
const relayStages = ["Spotted", "Volunteer Assigned", "En Route", "Caught"];

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getStatusClasses(status) {
  if (status === "Available") {
    return "bg-green-100 text-green-700";
  }

  if (status === "Busy") {
    return "bg-orange-100 text-orange-600";
  }

  return "bg-slate-100 text-slate-500";
}

function getStatusDot(status) {
  if (status === "Available") {
    return "bg-green-500";
  }

  if (status === "Busy") {
    return "bg-orange-500";
  }

  return "bg-slate-400";
}

function getPriorityClass(priority) {
  if (priority === "High Priority") {
    return "bg-orange-100 text-orange-600";
  }

  if (priority === "Medium") {
    return "bg-blue-100 text-blue-600";
  }

  return "bg-slate-100 text-slate-500";
}

function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <div className="group bg-white rounded-[22px] border border-orange-100 px-6 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)] hover:-translate-y-1 hover:border-orange-200 transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center ${stat.iconClass}`}>
          {stat.pulse && (
            <span className="absolute inline-flex h-10 w-10 rounded-full bg-green-300 opacity-40 animate-ping" />
          )}
          <Icon className="relative z-10" size={28} />
        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-500">
          {stat.trend}
        </span>
      </div>

      <p className="mt-6 text-sm font-semibold text-slate-500">
        {stat.title}
      </p>

      <h2 className="mt-2 text-[34px] font-extrabold leading-none text-slate-900">
        {stat.value}
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        {stat.support}
      </p>
    </div>
  );
}

function VolunteerCard({ volunteer, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(volunteer)}
      className="group w-full text-left rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_15px_40px_rgba(249,115,22,0.14)] focus:outline-none focus:ring-4 focus:ring-orange-100"
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-start">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-lg font-extrabold text-orange-500">
            {volunteer.avatar ? (
              <img
                src={volunteer.avatar}
                alt={volunteer.name}
                className="h-full w-full rounded-2xl object-cover"
              />
            ) : (
              getInitials(volunteer.name)
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-slate-800">
                {volunteer.name}
              </h3>

              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${getStatusClasses(volunteer.status)}`}>
                <span className={`h-2 w-2 rounded-full ${getStatusDot(volunteer.status)} ${volunteer.status === "Available" ? "animate-pulse" : ""}`} />
                {volunteer.status}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={16} />
                {volunteer.locality}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Navigation size={16} />
                Covers {volunteer.serviceRadius} km
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap items-center gap-2 xl:justify-end">
          {volunteer.canFoster && (
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
              Can Foster
            </span>
          )}
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
            {volunteer.rescuesCompleted} rescues
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-500">
            <Star size={13} className="fill-orange-400 text-orange-400" />
            {volunteer.rating}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {volunteer.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Languages size={16} />
            {volunteer.languages.join(", ")}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={16} />
            {volunteer.responseTime}
          </span>
        </div>

        <span className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white transition group-hover:bg-orange-600">
          Request Help
        </span>
      </div>
    </button>
  );
}

function RelayCard({ request }) {
  const completedIndex = relayStages.indexOf(request.status);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 transition duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500">
          <Cat size={28} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-800">
                {request.catName}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin size={15} />
                {request.location}
              </p>
            </div>

            <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${getPriorityClass(request.priority)}`}>
              {request.priority}
            </span>
          </div>

          <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-400">
            <Clock3 size={14} />
            {request.postedAt}
          </p>

          <div className="mt-4 space-y-3">
            {relayStages.map((stage, index) => {
              const isDone = index <= completedIndex;

              return (
                <div
                  key={stage}
                  className="flex items-center gap-3"
                >
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full ${isDone ? "bg-orange-100 text-orange-500" : "bg-slate-100 text-slate-400"}`}>
                    <CheckCircle2 size={15} />
                  </span>
                  <span className={`text-sm font-semibold ${isDone ? "text-slate-700" : "text-slate-400"}`}>
                    {stage}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-sm text-slate-500">
              {request.assignedVolunteer ? `Assigned to ${request.assignedVolunteer}` : "Awaiting volunteer"}
            </span>
            <button
              type="button"
              className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
            >
              Respond
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VolunteerDrawer({ volunteer, onClose }) {
  if (!volunteer) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/30 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close volunteer profile"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <aside className="relative h-full w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-100 text-2xl font-extrabold text-orange-500">
              {getInitials(volunteer.name)}
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {volunteer.name}
              </h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={16} />
                {volunteer.locality}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:border-orange-300 hover:text-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${getStatusClasses(volunteer.status)}`}>
            <span className={`h-2 w-2 rounded-full ${getStatusDot(volunteer.status)} ${volunteer.status === "Available" ? "animate-pulse" : ""}`} />
            {volunteer.status}
          </span>
          {volunteer.certificates.map((certificate) => (
            <span
              key={certificate}
              className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-500"
            >
              <ShieldCheck size={13} />
              {certificate}
            </span>
          ))}
        </div>

        <p className="mt-6 rounded-3xl border border-orange-100 bg-orange-50/60 p-5 leading-7 text-slate-600">
          {volunteer.bio}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {[
            ["Completed Rescues", volunteer.rescuesCompleted, Award],
            ["Response Time", volunteer.responseTime, Clock3],
            ["Joined", volunteer.joined, CalendarDays],
            ["Rating", volunteer.rating, Star],
          ].map(([label, value, Icon]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <Icon className="text-orange-500" size={22} />
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">
                {label}
              </p>
              <p className="mt-1 text-lg font-extrabold text-slate-900">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="font-bold text-slate-800">
            Recent Rescue History
          </h3>
          <div className="mt-5 space-y-4">
            {volunteer.history.map((item) => (
              <div
                key={`${item.title}-${item.time}`}
                className="flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={18} />
                </span>
                <div>
                  <p className="font-semibold text-slate-700">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-400">
                    {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
          >
            <MessageCircle size={18} />
            Direct Message
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-bold text-slate-700 transition hover:border-orange-300 hover:text-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
          >
            <Phone size={18} />
            Call Volunteer
          </button>
        </div>
      </aside>
    </div>
  );
}

export default function Volunteers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [distance, setDistance] = useState(8);
  const [canFosterOnly, setCanFosterOnly] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const filteredVolunteers = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return volunteers.filter((volunteer) => {
      const matchesSearch = [
        volunteer.name,
        volunteer.city,
        volunteer.locality,
        ...volunteer.skills,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);
      const matchesStatus = statusFilter === "All" || volunteer.status === statusFilter;
      const matchesDistance = volunteer.serviceRadius <= distance;
      const matchesFoster = !canFosterOnly || volunteer.canFoster;

      return matchesSearch && matchesStatus && matchesDistance && matchesFoster;
    });
  }, [canFosterOnly, distance, searchTerm, statusFilter]);

  function resetFilters() {
    setSearchTerm("");
    setStatusFilter("All");
    setDistance(8);
    setCanFosterOnly(false);
  }

  return (
    <div className="flex min-h-screen bg-[#FFFDF9]">
      <Sidebar />

      <main className="flex-1 p-8">
        <Topbar />

        <section className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Volunteers
            </h1>
            <p className="mt-2 max-w-2xl text-slate-500">
              Discover available helpers, coordinate rescue relays, and keep field support moving.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm">
            <Bell size={18} className="text-orange-500" />
            New relay request nearby in Sector 12
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              stat={stat}
            />
          ))}
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 xl:grid-cols-[minmax(260px,1.4fr)_190px_260px_180px_auto] xl:items-center">
            <label className="relative block">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search volunteers by name or area..."
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-5 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
              />
            </label>

            <label className="relative block">
              <SlidersHorizontal
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-white pl-11 pr-5 text-sm font-semibold text-slate-600 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                aria-label="Filter volunteers by status"
              >
                {statuses.map((status) => (
                  <option key={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>

            <div className="rounded-2xl border border-slate-200 px-4 py-3">
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-slate-700">
                  Within {distance} km
                </span>
                <span className="text-slate-400">
                  1-20 km
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={distance}
                onChange={(event) => setDistance(Number(event.target.value))}
                className="mt-3 w-full accent-orange-500"
                aria-label="Distance radius"
              />
            </div>

            <label className="flex h-14 cursor-pointer items-center justify-between gap-3 rounded-2xl border border-slate-200 px-4 transition hover:border-orange-300">
              <span className="text-sm font-semibold text-slate-700">
                Can Foster
              </span>
              <input
                type="checkbox"
                checked={canFosterOnly}
                onChange={(event) => setCanFosterOnly(event.target.checked)}
                className="h-5 w-5 accent-orange-500"
              />
            </label>

            <button
              type="button"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 font-bold text-white shadow-[0_12px_24px_rgba(249,115,22,0.22)] transition hover:scale-[1.02] hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
            >
              <UserPlus size={19} />
              Become a Volunteer
            </button>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 gap-6 2xl:grid-cols-[minmax(0,1fr)_420px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Volunteer Directory
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Showing volunteers within {distance} km
                </p>
              </div>
              <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-500">
                {filteredVolunteers.length} matches
              </span>
            </div>

            {filteredVolunteers.length > 0 ? (
              <div className="grid max-h-[760px] gap-4 overflow-y-auto pr-1">
                {filteredVolunteers.map((volunteer) => (
                  <VolunteerCard
                    key={volunteer.id}
                    volunteer={volunteer}
                    onSelect={setSelectedVolunteer}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[360px] flex-col items-center justify-center rounded-3xl border border-dashed border-orange-200 bg-orange-50/40 p-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-orange-500 shadow-sm">
                  <Cat size={40} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                  No volunteers match your filters.
                </h3>
                <p className="mt-2 max-w-md text-slate-500">
                  Try expanding the distance, changing status, or clearing the foster filter.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-100"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h2 className="text-xl font-bold text-slate-800">
                Active Relay Requests
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Rescue operations waiting for field support
              </p>
            </div>

            <div className="max-h-[760px] space-y-4 overflow-y-auto p-5">
              {relayRequests.map((request) => (
                <RelayCard
                  key={request.id}
                  request={request}
                />
              ))}
            </div>
          </aside>
        </section>
      </main>

      <VolunteerDrawer
        volunteer={selectedVolunteer}
        onClose={() => setSelectedVolunteer(null)}
      />
    </div>
  );
}
