import { YOUTUBE } from '@/constants/externalUrl';
import clsx from 'clsx';

const YoutubeVideo = ({ id, className }: { id: string; className?: string }) => {
  return (
    <div className={clsx(className, 'aspect-video rounded-2xl overflow-hidden')}>
      <iframe
        className="w-full h-full"
        src={YOUTUBE.IFRAME(id)}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeVideo;
