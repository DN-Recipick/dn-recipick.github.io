import ALink from '@/components/shared/ALink';
import Image from '@/components/shared/Image';
import { YOUTUBE } from '@/constants/externalUrl';

const ChannelInfo = ({
  channelTitle,
  channelName,
  videoId,
}: {
  channelTitle: string;
  channelName: string;
  videoId: string;
}) => {
  return (
    <div className="flex items-center gap-4 px-6 py-4 mt-8 mb-5 rounded-xl bg-[var(--color-card-bg)] border border-[var(--color-border)] shadow-[var(--shadow)]">
      <Image
        alt="채널 이미지"
        wrapClassName="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-blue-100 shadow"
      />
      <div className="flex-1 flex-column gap-1">
        <p className="text-base sm:text-lg line-clamp-1">{channelTitle}</p>
        <p className="text-[0.8rem] line-clamp-1 sm:text-base text-[var(--color-sub-text)]">
          {channelName}
        </p>
      </div>
      <ALink
        text="채널 보기"
        href={YOUTUBE.LINK(videoId)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm sm:text-base"
      />
    </div>
  );
};

export default ChannelInfo;
