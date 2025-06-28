import clsx from 'clsx';
import { type ReactNode } from 'react';

export interface DropdownListProps {
  listPosition: 'right' | 'left';
  children: ReactNode;
}

const DropdownList = ({ listPosition, children }: DropdownListProps) => {
  return (
    <ul
      className={clsx(
        listPosition === 'right' ? 'left-0' : 'right-0',
        'absolute overflow-hidden bg-white dark:bg-gray-800 mt-2 border border-gray-600 shadow-[var(--shadow)] rounded z-10',
      )}
    >
      {children}
    </ul>
  );
};

export default DropdownList;
