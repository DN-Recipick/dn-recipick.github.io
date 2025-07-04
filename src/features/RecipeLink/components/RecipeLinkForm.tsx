import Button from '@/components/shared/Button';
import Input from '@/components/shared/Input';
import { useLinkRecipe } from '@/features/RecipeLink/hooks/useLinkRecipe';
import { FaArrowRight } from 'react-icons/fa';

const RecipeLinkForm = () => {
  const { register, isPending, onSubmit, errors } = useLinkRecipe();
  return (
    <form
      onSubmit={onSubmit}
      className="p-2 my-3 flex-column justify-between border-[0.1rem] border-[var(--color-primary)] shadow-[var(--shadow)] min-h-25 rounded-md"
    >
      <Input
        {...register('url')}
        error={errors.url?.message}
        className="focus:outline-0"
        placeholder="https:// 유튜브 영상 링크를 입력하세요"
      />
      <div className="flex flex-row-reverse">
        <Button
          icon={<FaArrowRight className="text-[0.9rem]" />}
          type="submit"
          isPending={isPending}
          className="btn-primary rounded-md"
        />
      </div>
    </form>
  );
};

export default RecipeLinkForm;
