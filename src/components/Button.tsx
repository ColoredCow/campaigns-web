const Button = ({
  onClick,
  children,
  className,
  type,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type?: string;
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <button
        type={type}
        className="flex rounded-lg bg-indigo-700 px-4 py-2 text-white hover:bg-indigo-800"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
