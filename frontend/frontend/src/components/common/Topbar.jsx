import { useEffect, useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Topbar() {
  const { user } = useAuth();
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return localStorage.getItem("pawtrace-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function applyTheme(nextTheme) {
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("pawtrace-theme", nextTheme);
    setTheme(nextTheme);
  }

  function handleThemeChange(event) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const originX = buttonRect.left + buttonRect.width / 2;
    const originY = buttonRect.top + buttonRect.height / 2;

    if (!document.startViewTransition) {
      applyTheme(nextTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      applyTheme(nextTheme);
    });

    transition.ready.then(() => {
      const endRadius = Math.hypot(
        Math.max(originX, window.innerWidth - originX),
        Math.max(originY, window.innerHeight - originY),
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${originX}px ${originY}px)`,
            `circle(${endRadius}px at ${originX}px ${originY}px)`,
          ],
        },
        {
          duration: 850,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }

  return (
    <header className="flex items-center justify-between mb-8">

      {/* Left */}

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Welcome back,
          <span className="text-orange-500"> {user?.name || "there"}! 👋</span>
        </h1>

        <p className="text-slate-500 mt-2 text-lg">
          Here's what's happening in your community today.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative">

          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="
              w-80
              h-14
              rounded-2xl
              border
              border-slate-200
              bg-white
              pl-14
              pr-5
              text-sm
              outline-none
              focus:border-orange-400
              focus:ring-4
              focus:ring-orange-100
              transition
            "
          />

        </div>

        {/* Notification */}

        <button
          className="
            relative
            w-14
            h-14
            rounded-2xl
            bg-white
            border
            border-slate-200
            flex
            items-center
            justify-center
            hover:border-orange-300
            transition
          "
        >

          <Bell size={22} />

          <span
            className="
              absolute
              -top-1
              -right-1
              w-6
              h-6
              rounded-full
              bg-orange-500
              text-white
              text-xs
              font-bold
              flex
              items-center
              justify-center
            "
          >
            3
          </span>

        </button>

        {/* Theme */}

        <button
          type="button"
          onClick={handleThemeChange}
          className="
            w-14
            h-14
            rounded-2xl
            bg-white
            border
            border-slate-200
            flex
            items-center
            justify-center
            hover:border-orange-300
            transition
          "
          title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >

          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}

        </button>

        {/* User */}

        <button
          className="
            flex
            items-center
            gap-3
            bg-white
            border
            border-slate-200
            rounded-2xl
            px-3
            py-2
            hover:border-orange-300
            transition
          "
        >

          <img
            src="/images/avatar.png"
            alt="profile"
            className="w-11 h-11 rounded-full object-cover"
          />

          <div className="text-left">

            <h3 className="font-semibold text-slate-800">
              {user?.name || "PawTrace User"}
            </h3>

            <p className="text-xs text-slate-500">
              {user?.role || "User"}
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </button>

      </div>

    </header>
  );
}
