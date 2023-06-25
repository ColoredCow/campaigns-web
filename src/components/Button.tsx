const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-4">
      <button
        type="button"
        className="flex rounded-lg bg-indigo-700 px-4 py-2 text-white hover:bg-indigo-800"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
