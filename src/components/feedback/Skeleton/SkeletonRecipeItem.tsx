const SkeletonRecipeItem = () => {
  return (
    <li className="h-full">
      <article className="recipe-item-wrap animate-pulse">
        {/* 비디오 영역 대체 */}
        <div className="h-40 skeleton-bg rounded-b-none" />

        <div className="p-3 flex-1 flex-column justify-between gap-2">
          {/* recipe.name 자리 */}
          <div className="h-5 mb-4 skeleton-bg rounded w-3/4" />

          {/* recipe.title, channel, saved_at 자리 */}
          <div className="flex-column gap-2 mt-3">
            <div className="h-4 skeleton-bg rounded w-full" />
            <div className="h-4 skeleton-bg rounded w-1/2" />
            <div className="h-4 skeleton-bg rounded w-1/3" />
          </div>
        </div>
      </article>
    </li>
  );
};

export default SkeletonRecipeItem;
