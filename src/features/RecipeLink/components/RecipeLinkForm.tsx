import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { useLinkRecipe } from '@/features/RecipeLink/hooks/useLinkRecipe';
import { showToast } from '@/utils/toast';
import { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const RecipeLinkForm = () => {
  const { register, isPending, onSubmit, errors } = useLinkRecipe();
  useEffect(() => {
    if (errors.url?.message) {
      showToast.error(errors.url.message);
    }
  }, [errors.url?.message]);
  return (
    <form
      onSubmit={onSubmit}
      className="p-2 flex-column justify-between border-[0.1rem] border-[var(--color-primary)] shadow-[var(--shadow)] min-h-25 rounded-md"
    >
      <Input {...register('url')} className="focus:outline-0" placeholder="유튜브 영상 링크 입력" />
      <div className="flex flex-row-reverse">
        <Button type="submit" isPending={isPending} className="btn-primary rounded-md">
          <FaArrowRight className="text-[0.9rem]" />
        </Button>
      </div>
    </form>
  );
};

export default RecipeLinkForm;
