import clsx from 'clsx';
import YouTube from 'react-youtube';

const YoutubeVideo = ({ id, className }: { id: string; className?: string }) => {
  return (
    <div className={clsx(className, 'aspect-video rounded-md overflow-hidden')}>
      <YouTube
        videoId={id}
        className="w-full h-full"
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 0,
          },
        }}
      />
    </div>
  );
};

export default YoutubeVideo;
