import clsx from 'clsx';

interface EmptyStateProps {
  text: string;
  className?: string;
}

const EmptyState = ({ text, className }: EmptyStateProps) => {
  return <p className={clsx('text-center text-gray-400 py-18', className)}>{text}</p>;
};

export default EmptyState;
