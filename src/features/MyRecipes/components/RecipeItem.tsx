import YoutubeVideo from '@/components/shared/YoutubeVideo';
import { ROUTES } from '@/constants/routes';
import type { Recipe } from '@/types/recipe';
import { formatDateTime } from '@/utils/format';
import { useNavigate } from 'react-router-dom';

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();
  return (
    <article
      className="h-full cursor-pointer bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-[var(--shadow)] flex-column
            transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg"
      onClick={() => navigate(ROUTES.RECIPE(recipe.id))}
    >
      <YoutubeVideo className="h-35" id={recipe.video_id} />
      <div className="p-3 flex-1 flex-column justify-between">
        <h3 className="text-lg font-extrabold line-clamp-2">{recipe.name}</h3>
        <div className="flex-column gap-2">
          <p className="text font-bold line-clamp-2">{recipe.title}</p>
          <p className="text-sm font-bold text-gray-400">{recipe.channel}</p>
          <p className="text-sm text-gray-400">{formatDateTime(recipe.saved_at)}</p>
        </div>
      </div>
    </article>
  );
};

export default RecipeItem;
