import Image from '@/components/shared/Image';
import { YOUTUBE_THUMBNAIL } from '@/constants/externalUrl';
import { ROUTES } from '@/constants/routes';
import type { Recipe } from '@/types/recipe';
import { formatDateTime } from '@/utils/format';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(ROUTES.RECIPE(recipe.id))}
      className="recipe-item-wrap transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer bg-[var(--color-list-item-bg)]"
    >
      <Image src={YOUTUBE_THUMBNAIL(recipe.video_id)} alt={recipe.title} wrapClassName="h-45" />
      <div className="p-3 flex-1 flex-column justify-between">
        <h3 className="text-lg font-extrabold line-clamp-2">{recipe.name}</h3>
        <div className="flex-column gap-2">
          <p className="font-bold line-clamp-2">{recipe.title}</p>
          <p className="text-sm font-bold text-gray-400 line-clamp-1">{recipe.channel}</p>
          <p className="text-sm text-gray-400 font-sans font-bold">
            {formatDateTime(recipe.saved_at ?? recipe.created_at)}
          </p>
        </div>
      </div>
    </li>
  );
};

export default React.memo(RecipeItem);
