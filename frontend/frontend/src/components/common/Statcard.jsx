import { Heart } from "lucide-react";

export default function Statcard({ icon, count, label }) {
  return (
    <div
      className="
        group
        bg-white
        rounded-[22px]
        border border-orange-100
        px-6
        py-6
        flex
        flex-col
        items-center
        justify-center
        text-center
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)]
        hover:-translate-y-1
        transition-all
        duration-300
        w-full
      "
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <div className="text-3xl text-orange-500">
          {icon}
        </div>
      </div>

      {/* Count */}
      <h2 className="text-[34px] font-extrabold leading-none text-slate-900">
        {count}
      </h2>

      {/* Label */}
      <p className="text-sm text-slate-500 mt-2 font-medium">
        {label}
      </p>

      {/* Bottom Heart */}
      <Heart className="w-4 h-4 mt-4 fill-orange-500 text-orange-500 group-hover:scale-125 transition-transform duration-300" />
    </div>
  );
}