export default function StatCardSection({
  title,
  value,
  icon,
  bgColor,
  textColor,
  change,
  changeType = "positive",
}) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-6
      border
      border-slate-100
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      hover:-translate-y-1
    "
    >
      <div className="flex justify-between items-start">

        <div>

          <p className="text-slate-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            {value}
          </h2>

          <p
            className={`mt-4 text-sm font-semibold ${
              changeType === "positive"
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {change}
          </p>

        </div>

        <div
          className={`${bgColor} w-16 h-16 rounded-2xl flex items-center justify-center`}
        >
          <div className={`${textColor}`}>
            {icon}
          </div>
        </div>

      </div>
    </div>
  );
}