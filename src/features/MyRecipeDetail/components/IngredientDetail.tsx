import EmptyState from '@/components/feedback/empty/EmptyState';
import SkeletonIngredientDetail from '@/components/feedback/skeleton/SkeletonIngredientDetail';
import ALink from '@/components/shared/ALink';
import Image from '@/components/shared/Image';
import { KURLY_ITEM_URL } from '@/constants/externalUrl';
import { useGetKurlyItem } from '@/features/MyRecipeDetail/hooks/useGetKurlyItem';
import { formatNumber } from '@/utils/format';

const IngredientDetail = ({ ingredientKeyword }: { ingredientKeyword: string }) => {
  const { isPending, kurlyItems } = useGetKurlyItem(ingredientKeyword);
  if (isPending) return <SkeletonIngredientDetail />;
  return (
    <>
      <div className="flex flex-wrap mb-4">
        <p className="text-[1.1rem] sm:text-xl">컬리에서&nbsp;</p>
        <span className="text-[1.1rem] sm:text-xl whitespace-nowrap">
          <span className="text-[var(--color-kurly)]">'{ingredientKeyword}'</span>을(를)&nbsp;
        </span>
        <span className="text-[1.1rem] sm:text-xl block">검색한 결과입니다.</span>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {kurlyItems?.length === 0 && <EmptyState text="일치하는 재료링크가 없습니다" />}
        {kurlyItems?.map((kurlyItem) => (
          <li
            key={kurlyItem.no}
            className="rounded-xl overflow-hidden shadow-[var(--shadow)] bg-[var(--color-card-bg)] p-3 flex sm:flex-col sm:items-center sm:gap-3 gap-4"
          >
            <Image
              src={kurlyItem.imageUrl}
              wrapClassName="w-26 h-26 rounded-md shrink-0 sm:w-full sm:h-65 aspect-square object-cover"
            />
            <div className="flex flex-col justify-between flex-1 w-full sm:items-center sm:text-center">
              <p className="text-lg sm:text-base font-medium line-clamp-1">{kurlyItem.name}</p>
              <p className="text-[var(--color-sub-text)] font-semibold mt-1 mb-2">
                {formatNumber(kurlyItem.price)}원
              </p>
              <ALink
                className="btn-kurly text-center hover-opacity w-full"
                href={KURLY_ITEM_URL(kurlyItem.no)}
                text="구매"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientDetail;
