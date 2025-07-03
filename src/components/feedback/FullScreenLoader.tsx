const FullScreenLoader = () => {
  return (
    <div className="full-page-center">
      <svg
        className="w-12 h-12 animate-spin text-[var(--color-primary)]"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          className="opacity-20"
        />
        <path
          d="M50 5
      a 45 45 0 0 1 0 90"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          className="opacity-90"
        />
      </svg>
    </div>
  );
};

export default FullScreenLoader;
