const RecipeItemLoadingState = () => {
  return (
    <div
      className="overflow-hidden flex flex-col items-center justify-center h-full p-6 cursor-not-allowed rounded-md bg-gray-200 dark:bg-gray-600"
      onClick={(e) => e.stopPropagation()}
    >
      <svg
        className="w-10 h-10 mb-3 text-gray-500 dark:text-gray-300"
        viewBox="0 0 58 58"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g transform="translate(2 1)" strokeWidth="1.5" fill="none" fillRule="evenodd">
          <circle cx="42.601" cy="11.462" r="5" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              begin="0s"
              dur="1.3s"
              values="1;.7;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="49.063" cy="27.063" r="5" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              begin="0.1s"
              dur="1.3s"
              values="1;.7;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="42.601" cy="42.601" r="5" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              begin="0.2s"
              dur="1.3s"
              values="1;.7;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="27.063" cy="49.063" r="5" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              begin="0.3s"
              dur="1.3s"
              values="1;.7;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="11.462" cy="42.601" r="5" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              begin="0.4s"
              dur="1.3s"
              values="1;.7;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="5" cy="27.063" r="5" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              begin="0.5s"
              dur="1.3s"
              values="1;.7;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="11.462" cy="11.462" r="5" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              begin="0.6s"
              dur="1.3s"
              values="1;.7;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="27.063" cy="5" r="5" fill="currentColor">
            <animate
              attributeName="fill-opacity"
              begin="0.7s"
              dur="1.3s"
              values="1;.7;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>

      <p className="text-sm text-[var(--color-sub-text)]">레시피를 준비 중입니다...</p>
    </div>
  );
};

export default RecipeItemLoadingState;
