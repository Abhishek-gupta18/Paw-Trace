import {
  LayoutDashboard,
  FileText,
  Cat,
  MapPinned,
  Users,
  MessageCircle,
  Bell,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo"
import { useAuth } from "./AuthContext";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    name: "ReportLostCat",
    icon: FileText,
    path: "/reportLostCat"

  },
  {
    name: "My Cats",
    icon: Cat,
    path: "/my-cats",
  },
  {
    name: "Community Map",
    icon: MapPinned,
    path: "/map",
  },
  {
    name: "Volunteers",
    icon: Users,
    path: "/volunteers",
  },
  {
    name: "Messages",
    icon: MessageCircle,
    path: "/messages",
  },
  {
    name: "Notifications",
    icon: Bell,
    path: "/notifications",
    badge: 3,
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login", { replace: true });
  }

  return (
    <aside className="w-72 bg-white border-r border-orange-100 flex flex-col justify-between min-h-screen">

      {/* Logo */}

      <div>

        <div className="px-6 py-6 border-b border-orange-100">

          <Logo />

        </div>

        {/* Navigation */}

        <nav className="mt-6 px-4 space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 group
                  
                  ${
                    isActive
                      ? "bg-orange-50 text-orange-500 font-semibold shadow-sm"
                      : "text-slate-600 hover:bg-orange-50 hover:text-orange-500"
                  }`
                }
              >
                <div className="flex items-center gap-3">

                  <Icon
                    size={22}
                    className="group-hover:scale-110 transition-transform"
                  />

                  <span>{item.name}</span>

                </div>

                {item.badge && (
                  <span className="bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}

              </NavLink>
            );
          })}
        </nav>

        {/* Volunteer Card */}

        <div className="mx-5 mt-8 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 p-5 shadow-sm">

          <div className="flex justify-center">

            <img
              src="/images/volunteer.png"
              alt="Volunteer"
              className="h-32 object-contain"
            />

          </div>

          <h3 className="font-bold text-slate-800 mt-4">

            Become a Hero ❤️

          </h3>

          <p className="text-sm text-slate-500 mt-2 leading-6">

            Join our volunteer network and help reunite lost cats
            with their families.

          </p>

          <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition">

            Join as Volunteer

          </button>

        </div>

      </div>

      {/* Bottom User */}

      <div className="border-t border-orange-100 p-5">

        <div className="flex items-center gap-3">

          <img
            src="/images/avatar.png"
            alt="user"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="min-w-0 flex-1">

            <h4 className="font-semibold text-slate-800">

              {user?.name || "PawTrace User"}

            </h4>

            <p className="text-sm text-slate-500">

              {user?.email || "user@pawtrace.app"}

            </p>

          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:border-orange-300 hover:text-orange-500 transition"
            title="Log out"
          >
            <LogOut size={18} />
          </button>

        </div>

      </div>

    </aside>
  );
}
