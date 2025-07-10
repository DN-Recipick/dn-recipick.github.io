import Image from '@/components/shared/Image';
import { ROUTES } from '@/constants/routes';
import type { Recipe } from '@/types/recipe';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { YOUTUBE } from '@/constants/externalUrl';
import { useModalStore } from '@/store/useModalStore';

const RecipeItem = ({ recipe }: { recipe: Recipe }) => {
  const navigate = useNavigate();
  const { isOpen, close } = useModalStore();
  return (
    <li
      onClick={() => {
        if (isOpen) close();
        navigate(ROUTES.RECIPE(recipe.id));
      }}
      className="recipe-item-wrap transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer bg-[var(--color-card-bg)]"
    >
      <Image
        src={YOUTUBE.THUMBNAIL(recipe.video_id)}
        alt={recipe.title}
        wrapClassName="basis-5/8"
      />
      <div className="p-3 flex-1 flex-column justify-between">
        <h3 className="text-lg font-extrabold line-clamp-1">{recipe.name}</h3>
        <p className="font-bold text-[var(--color-sub-text)] line-clamp-1 text-sm">
          by {recipe.channel}
        </p>
        <p className="text-sm text-gray-400 line-clamp-1">{recipe.title}</p>
        {/* <p className="date-text text-sm">
                {formatDateTime(recipe.saved_at ?? recipe.created_at)}
              </p> */}
      </div>
    </li>
  );
};

export default React.memo(RecipeItem);
