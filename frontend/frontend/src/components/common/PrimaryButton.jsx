const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;