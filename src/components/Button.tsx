const Button = ({
  onClick,
  children,
  className,
  type,
  disabled,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type?: string;
  disabled?: boolean;
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <button
        type={type}
        className="flex rounded-lg bg-indigo-700 px-4 py-2 text-white hover:bg-indigo-800"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
