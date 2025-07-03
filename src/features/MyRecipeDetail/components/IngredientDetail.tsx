import FullScreenLoader from '@/components/feedback/FullScreenLoader';
import Button from '@/components/shared/Button';
import Image from '@/components/shared/Image';
import { KURLY_ITEM_URL } from '@/constants/externalUrl';
import { useGetKurlyItem } from '@/features/MyRecipeDetail/hooks/useGetKurlyItem';
import { formatNumber } from '@/utils/format';

const IngredientDetail = ({ ingredientKeyword }: { ingredientKeyword: string }) => {
  const { isPending, kurlyItems } = useGetKurlyItem(ingredientKeyword);
  if (isPending) return <FullScreenLoader />;

  return (
    <section>
      <ul className="flex-column gap-5">
        {kurlyItems?.map((kurlyItem) => (
          <li key={kurlyItem.no}>
            <article className="flex-center-between">
              <div className="flex gap-3">
                <Image src={kurlyItem.imageUrl} wrapClassName="w-30 h-30 rounded-md shrink-0" />
                <div className="flex-column justify-center gap-2">
                  <p className="text-xl">{kurlyItem.name}</p>
                  <p>{formatNumber(kurlyItem.price)}원</p>
                </div>
              </div>
              <a href={KURLY_ITEM_URL(kurlyItem.no)} target="_blank" rel="noopener noreferrer">
                <Button text="구매" className="btn-primary" />
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientDetail;
