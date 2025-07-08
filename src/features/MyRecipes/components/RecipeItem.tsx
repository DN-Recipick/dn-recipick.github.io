import Image from '@/components/shared/Image';
import { ROUTES } from '@/constants/routes';
import type { Recipe } from '@/types/recipe';
import { formatDateTime } from '@/utils/format';
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
      className="recipe-item-wrap border border-[var(--color-border)] transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer bg-[var(--color-card-bg)]"
    >
      <Image src={YOUTUBE.THUMBNAIL(recipe.video_id)} alt={recipe.title} wrapClassName="h-45" />
      <h3 className="text-lg pt-3 px-3 font-extrabold line-clamp-1">{recipe.name}</h3>
      <div className="p-3 flex-column flex-1 justify-between">
        <p className="font-bold line-clamp-2">{recipe.title}</p>
        <div className="flex-column gap-2 mt-2">
          <p className="text-sm font-bold text-[var(--color-sub-text)] line-clamp-1">
            {recipe.channel}
          </p>
          <p className="date-text text-sm">
            {formatDateTime(recipe.saved_at ?? recipe.created_at)}
          </p>
        </div>
      </div>
    </li>
  );
};

export default React.memo(RecipeItem);
