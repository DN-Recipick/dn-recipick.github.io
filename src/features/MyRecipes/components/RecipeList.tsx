import EmptyState from '@/components/feedback/EmptyState';
import SkeletonRecipeItem from '@/components/feedback/Skeleton/SkeletonRecipeItem';
import { ROUTES } from '@/constants/routes';
import type { Recipe } from '@/types/recipe';
import { formatDateTime } from '@/utils/format';
import { useNavigate } from 'react-router-dom';
import Image from '@/components/shared/Image';
import { YOUTUBE_THUMBNAIL } from '@/constants/externalUrl';

const RecipeList = ({
  recipes,
  isPending,
}: {
  recipes: Recipe[] | undefined;
  isPending: boolean;
}) => {
  const navigate = useNavigate();
  if (recipes?.length === 0) return <EmptyState text="저장된 레시피가 없습니다" />;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 items-stretch">
      {isPending
        ? Array.from({ length: 6 }).map((_, idx) => <SkeletonRecipeItem key={idx} />)
        : recipes?.map((recipe) => (
            <li className="h-full" key={recipe.id}>
              <article
                className="recipe-item-wrap transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer bg-white dark:bg-gray-800"
                onClick={() => navigate(ROUTES.RECIPE(recipe.id))}
              >
                <Image
                  src={YOUTUBE_THUMBNAIL(recipe.video_id)}
                  alt={recipe.title}
                  wrapClassName="h-40"
                />
                <div className="p-3 flex-1 flex-column justify-between">
                  <h3 className="text-lg font-extrabold line-clamp-2">{recipe.name}</h3>
                  <div className="flex-column gap-2">
                    <p className="text font-bold line-clamp-2">{recipe.title}</p>
                    <p className="text-sm font-bold text-gray-400">{recipe.channel}</p>
                    <p className="text-sm text-gray-400">{formatDateTime(recipe.saved_at)}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
    </ul>
  );
};

export default RecipeList;
