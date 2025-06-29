import clsx from 'clsx';
import { type ReactNode } from 'react';

export interface DropdownListProps {
  className: string;
  children: ReactNode;
}

const DropdownList = ({ className, children }: DropdownListProps) => {
  return (
    <ul
      className={clsx(
        className,
        'absolute overflow-hidden bg-white dark:bg-gray-800 mt-2 border border-gray-600 shadow-[var(--shadow)] rounded z-10',
      )}
    >
      {children}
    </ul>
  );
};

export default DropdownList;
