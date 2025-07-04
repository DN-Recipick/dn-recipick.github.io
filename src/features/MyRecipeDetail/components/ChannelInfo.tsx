import Image from '@/components/shared/Image';

const ChannelInfo = ({
  channelTitle,
  channelName,
}: {
  channelTitle: string;
  channelName: string;
}) => {
  return (
    <div className="flex-center gap-3 mt-8 mb-5">
      <Image
        alt={`채널 이미지`}
        wrapClassName="bg-blue-100 shadow-[var(--shadow)] w-16.5 h-16.5 sm:w-18 sm:h-18 rounded-full"
      />
      <div className="flex-column gap-1">
        <p className="text-[1.1rem] sm:text-xl">{channelTitle}</p>
        <p className="text-[0.9rem] sm:text-[1rem] text-gray-500 dark:text-gray-400">
          {channelName}
        </p>
      </div>
    </div>
  );
};

export default ChannelInfo;
