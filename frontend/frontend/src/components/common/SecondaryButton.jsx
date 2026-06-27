const SecondaryButton = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;