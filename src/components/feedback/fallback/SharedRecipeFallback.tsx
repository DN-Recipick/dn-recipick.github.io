import FullScreenLoader from '@/components/feedback/loading/FullScreenLoader';
import { useShareUrl } from '@/components/hooks/useShareUrl';

const SharedRecipeFallback = () => {
  useShareUrl();
  return <FullScreenLoader />;
};

export default SharedRecipeFallback;
