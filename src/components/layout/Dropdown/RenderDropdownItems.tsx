import type { DropdownOptions } from '@/constants/dropdownOptions';
import type { ReactNode } from 'react';

interface DropdownItemsProps {
  options: DropdownOptions[];
  onSelect?: (option: DropdownOptions) => void;
  setOpen: (v: boolean) => void;
}

const DropdownItems = ({ options, onSelect, setOpen }: DropdownItemsProps): ReactNode => {
  return options.map((option) => (
    <li
      key={option.text}
      className="dropdown-item"
      onClick={() => {
        onSelect?.(option);
        setOpen(false);
      }}
    >
      {option.icon}
      <span className="flex-1 text-center capitalize">{option.text}</span>
    </li>
  ));
};

export default DropdownItems;
