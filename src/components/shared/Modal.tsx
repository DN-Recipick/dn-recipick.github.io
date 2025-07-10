import { createPortal } from 'react-dom';
import { useModalStore } from '@/store/useModalStore';
import Button from '@/components/shared/Button';
import { HiX } from 'react-icons/hi';
import { useModalEffect } from '@/components/shared/hook/useModalEffect';
import IngredientDetail from '@/features/MyRecipeDetail/components/IngredientDetail';
import RecommendedRecipes from '@/features/MyRecipeDetail/components/RecommendedRecipes';
import SectionLayout from '@/components/shared/SectionLayout';

const Modal = () => {
  const { data, type, isOpen, close } = useModalStore();
  useModalEffect({ isOpen, onClose: close });

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex-center px-content bg-black/50" onClick={close}>
      <div
        className="bg-[var(--color-bg)] rounded-md shadow-xl max-w-3xl w-full min-h-[90vh] max-h-[95vh] overflow-hidden
              transition-all duration-300 transform -translate-y
              animate-fade-in-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 p-3 shadow-[var(--shadow)]">
          <h3 className="text-center h-15 content-center">{data?.title}</h3>
          <Button
            onClick={close}
            icon={<HiX className="text-3xl" />}
            className="btn-icon text-gray-500 absolute right-2 top-2"
          />
        </div>
        <div className="px-content overflow-y-auto max-h-[calc(95vh-6rem)] pb-4">
          <SectionLayout>
            {type === 'ingredient' && (
              <IngredientDetail ingredientKeyword={data?.ingredientKeyword as string} />
            )}
            {type === 'recommendRecipes' && <RecommendedRecipes id={data?.id as string} />}
          </SectionLayout>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
