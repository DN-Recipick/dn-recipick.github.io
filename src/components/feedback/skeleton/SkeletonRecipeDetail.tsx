const SkeletonRecipeDetail = () => {
  return (
    <>
      <div className="h-7 w-2/5 skeleton-bg rounded mb-3" />

      <div className="h-4 w-1/2 skeleton-bg rounded mb-2" />

      <div className="aspect-video rounded-2xl skeleton-bg mt-3" />

      <section className="pt-6">
        <div className="h-6 w-25 skeleton-bg rounded mb-5" />
        <ol className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <li key={i} className="relative h-[5.207rem] skeleton-bg rounded-xl" />
          ))}
        </ol>
      </section>
    </>
  );
};

export default SkeletonRecipeDetail;
