import { createPortal } from 'react-dom';
import { useModalStore } from '@/store/useModalStore';
import Button from '@/components/shared/Button';
import { HiX } from 'react-icons/hi';
import { useModalEffect } from '@/components/shared/hook/useModalEffect';
import IngredientDetail from '@/features/MyRecipeDetail/components/IngredientDetail';

const Modal = () => {
  const { data, type, isOpen, close } = useModalStore();
  useModalEffect({ isOpen, onClose: close });

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex-center bg-black/50" onClick={close}>
      <div
        className="bg-white dark:bg-gray-800 rounded-md shadow-xl max-w-xl w-full min-h-[18.75rem] max-h-[80vh] 
              transition-all duration-300 transform -translate-y-5 opacity-0
              animate-fade-in-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 p-3 shadow-[var(--shadow)]">
          <h3 className="text-center h-15 content-center mb-0">{data?.title}</h3>
          <Button onClick={close} className="btn-icon text-gray-500 absolute right-2 top-2">
            <HiX className="text-2xl" />
          </Button>
        </div>
        <div className="max-h-[65vh] overflow-y-auto px-content">
          {type === 'ingredient' && (
            <IngredientDetail ingredientKeyword={data?.ingredientKeyword as string} />
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
