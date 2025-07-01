import FullScreenLoader from '@/components/feedback/FullScreenLoader';
import Button from '@/components/shared/Button';
import Image from '@/components/shared/Image';
import { KURLY_ITEM_URL } from '@/constants/externalUrl';
import { useGetKurlyItem } from '@/features/MyRecipeDetail/hooks/useGetKurlyItem';
import { formatNumber } from '@/utils/format';

const IngredientDetail = ({ ingredientKeyword }: { ingredientKeyword: string }) => {
  // const { isPending, kurlyItems } = useGetKurlyItem(ingredientKeyword);
  // if (isPending) return <FullScreenLoader />;
  const kurlyItems = [
    {
      no: '5054657',
      name: '[KF365] 다다기오이 3입',
      price: '2990',
      imageUrl:
        'https://product-image.kurly.com/product/image/6f75bf79-4b78-4d64-8691-dd6a577e78d6.jpeg',
    },
    {
      no: '5000333',
      name: '친환경 오이 2입',
      price: '2990',
      imageUrl: 'https://img-cf.kurly.com/shop/data/goods/1648208836561l0.jpeg',
    },
    {
      no: '1001201283',
      name: '천안 아우내 오이 5입',
      price: '5990',
      imageUrl:
        'https://product-image.kurly.com/product/image/9f75b592-aa60-4411-8880-7bda924fb279.jpg',
    },
    {
      no: '1000165817',
      name: '미니오이 5입',
      price: '3290',
      imageUrl:
        'https://product-image.kurly.com/product/image/74b5445b-7cd4-4420-8d91-14b3c78ef0da.jpg',
    },
    {
      no: '5051479',
      name: '오이지용 오이 20입',
      price: '14900',
      imageUrl: 'https://img-cf.kurly.com/shop/data/goods/1653038050409l0.jpg',
    },
  ];
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
