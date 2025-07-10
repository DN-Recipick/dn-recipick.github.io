const SkeletonIngredientDetail = () => {
  return (
    <>
      <div className="h-5 w-2/3 skeleton-bg rounded mb-4 animate-pulse" />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[...Array(5)].map((_, i) => (
          <li
            key={i}
            className="h-[8rem] sm:h-[24.375rem] rounded-xl overflow-hidden shadow-[var(--shadow)] skeleton-bg"
          />
        ))}
      </ul>
    </>
  );
};

export default SkeletonIngredientDetail;
