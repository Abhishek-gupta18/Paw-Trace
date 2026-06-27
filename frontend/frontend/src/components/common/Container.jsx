const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-5 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;