const SkeletonRecipeItem = () => {
  return (
    <li className="recipe-item-wrap">
      <div className="basis-5/8 skeleton-bg rounded-b-none" />
      <div className="p-3 flex-1 flex-column justify-between">
        <div className="h-5 skeleton-bg rounded w-2/3" />
        <div className="h-4 skeleton-bg rounded w-1/2" />
        <div className="h-4 skeleton-bg rounded w-full" />
      </div>
    </li>
  );
};

export default SkeletonRecipeItem;
