import EmptyState from '@/components/feedback/empty/EmptyState';
import FullScreenLoader from '@/components/feedback/loading/FullScreenLoader';
import ALink from '@/components/shared/ALink';
import Image from '@/components/shared/Image';
import { KURLY_ITEM_URL } from '@/constants/externalUrl';
import { useGetKurlyItem } from '@/features/MyRecipeDetail/hooks/useGetKurlyItem';
import { formatNumber } from '@/utils/format';

const IngredientDetail = ({ ingredientKeyword }: { ingredientKeyword: string }) => {
  const { isPending, kurlyItems } = useGetKurlyItem(ingredientKeyword);
  if (isPending) return <FullScreenLoader />;
  return (
    <ul className="flex-column divide-y divide-gray-300">
      {kurlyItems?.length === 0 && <EmptyState text="일치하는 재료링크가 없습니다" />}
      {kurlyItems?.map((kurlyItem) => (
        <li key={kurlyItem.no} className="py-content">
          <article className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex gap-4.5">
              <Image src={kurlyItem.imageUrl} wrapClassName="w-30 h-30 rounded-md shrink-0" />
              <div className="flex flex-col justify-center gap-1 sm:gap-2">
                <p className="text-xl">{kurlyItem.name}</p>
                <p>{formatNumber(kurlyItem.price)}원</p>
              </div>
            </div>
            <ALink
              className="btn-kurly text-center hover-opacity"
              href={KURLY_ITEM_URL(kurlyItem.no)}
              text="구매"
              target="_blank"
              rel="noopener noreferrer"
            />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default IngredientDetail;
