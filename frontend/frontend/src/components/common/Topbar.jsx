import {
  Search,
  Bell,
  ChevronDown,
  Sun,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between mb-8">

      {/* Left */}

      <div>

        <h1 className="text-4xl font-bold text-slate-900">
          Welcome back,
          <span className="text-orange-500"> Himanshi! 👋</span>
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
        >

          <Sun size={20} />

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
              Himanshi
            </h3>

            <p className="text-xs text-slate-500">
              Admin
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