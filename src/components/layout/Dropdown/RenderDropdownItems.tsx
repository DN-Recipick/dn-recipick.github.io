import type { DropdownOptions } from '@/constants/dropdownOptions';
import useDropdown from '@/hooks/useDropdown';
import clsx from 'clsx';
import type { ReactNode } from 'react';

interface DropdownItemsProps {
  options: DropdownOptions[];
  onSelect?: (option: DropdownOptions) => void;
  className?: string;
}

const DropdownItems = ({ options, onSelect, className }: DropdownItemsProps): ReactNode => {
  const { setOpen } = useDropdown();
  return options.map((option) => (
    <li
      key={option.text}
      className={clsx('dropdown-item', className)}
      onClick={() => {
        onSelect?.(option);
        setOpen(false);
      }}
    >
      {option.icon}
      <span className="flex-1 text-center">{option.text}</span>
    </li>
  ));
};

export default DropdownItems;
