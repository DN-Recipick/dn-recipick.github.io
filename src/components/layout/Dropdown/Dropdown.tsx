import Button from '@/components/shared/Button';
import useDropdown from '@/hooks/useDropdown';
import clsx from 'clsx';
import type { ReactNode } from 'react';

interface DropdownProps {
  icon?: ReactNode;
  text?: string;
  children: ReactNode;
  dropdownListClassName?: string;
}

const Dropdown = ({
  icon,
  children: dropdownListChildren,
  dropdownListClassName,
}: DropdownProps) => {
  const { isOpen, setOpen, dropdownRef } = useDropdown<HTMLDivElement>();

  return (
    <div ref={dropdownRef} className="relative text-sm">
      <Button
        className="gap-2.5 btn-icon"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        icon={icon}
      />

      {isOpen && (
        <ul
          className={clsx(
            dropdownListClassName,
            'absolute overflow-hidden bg-white dark:bg-gray-800 mt-2 border border-gray-600 shadow-[var(--shadow)] rounded z-10',
          )}
        >
          {dropdownListChildren}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
