const SectionTitle = ({
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-4xl font-bold text-slate-800">
        {title}
      </h2>

      <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;